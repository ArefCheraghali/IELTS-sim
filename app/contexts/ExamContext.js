import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

const ExamContext = createContext();

export function ExamProvider({ children }) {
  const [volume, setVolume] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const savedVolume = localStorage.getItem("examVolume");
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);

  const handleVolumeChange = (newVolume) => {
    const clampedVolume = Math.min(1, Math.max(0, newVolume));
    setVolume(clampedVolume);
    localStorage.setItem("examVolume", clampedVolume.toString());
  };

  const startTimer = useCallback((durationInMinutes) => {
    setTimeLeft(durationInMinutes * 60);
    setIsRunning(true);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(0);
  }, []);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 1 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [menuPosition, setMenuPosition] = useState({
    mouseX: null,
    mouseY: null,
  });
  const textRef = useRef(null);

  const handleTextSelection = (event) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && !selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      if (range.toString().trim().length > 1) {
        setSelectedRange(range);
        setAnchorEl(event.currentTarget);
        setMenuPosition({ mouseX: event.clientX, mouseY: event.clientY });
      }
    } else {
      setAnchorEl(null);
    }
  };

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      handleTextSelection(event);
    };

    const currentTextRef = textRef.current;
    if (currentTextRef) {
      currentTextRef.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (currentTextRef) {
        currentTextRef.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, [textRef, handleTextSelection]);

  const handleHighlight = () => {
    if (selectedRange) {
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      try {
        selectedRange.surroundContents(span);
      } catch (error) {
        console.error("Highlighting failed:", error);
      }
      setSelectedRange(null);
      setAnchorEl(null);
      window.getSelection().removeAllRanges();
    }
  };

  const handleClearHighlights = () => {
    if (textRef.current) {
      const spans = textRef.current.querySelectorAll(
        "span[style='background-color: yellow;']"
      );
      spans.forEach((span) => {
        const parent = span.parentNode;
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
        parent.normalize();
      });
    }
    setAnchorEl(null);
  };

  const handleCloseHighlightMenu = () => {
    setAnchorEl(null);
  };

  const value = {
    volume,
    setVolume: handleVolumeChange,
    timeLeft,
    isRunning,
    startTimer,
    resetTimer,
    formatTime,
    anchorEl,
    menuPosition,
    textRef,
    handleHighlight,
    handleClearHighlights,
    handleCloseHighlightMenu,
  };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
}
