import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

const HighlightContext = createContext();

export function HighlightProvider({ children }) {
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
      const selectedText = range.toString().trim();

      // Only show menu if selected text is longer than 1 character
      if (selectedText.length <= 1) {
        return;
      }

      const rect = range.getBoundingClientRect();

      if (!isRangeValid(range)) {
        alert("Please select text only.");
        return;
      }

      setSelectedRange(range);
      setAnchorEl(textRef.current);

      // Position menu at mouse position for right-click, otherwise at the bottom of selection
      const menuX =
        event?.type === "contextmenu"
          ? event.clientX
          : rect.left + rect.width / 2;
      const menuY =
        event?.type === "contextmenu" ? event.clientY : rect.bottom + 10;

      setMenuPosition({
        mouseX: menuX,
        mouseY: menuY,
      });
    } else {
      setAnchorEl(null);
    }
  };

  useEffect(() => {
    const handleMouseUp = (event) => {
      if (event.button === 0) {
        // Left mouse button
        handleTextSelection();
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      handleTextSelection(event);
    };

    document.addEventListener("mouseup", handleMouseUp);
    textRef.current?.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      textRef.current?.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const isRangeValid = (range) => {
    const commonAncestor = range.commonAncestorContainer;
    return (
      commonAncestor.nodeType === Node.TEXT_NODE ||
      commonAncestor.nodeType === Node.ELEMENT_NODE
    );
  };

  const handleHighlight = () => {
    if (selectedRange) {
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";

      try {
        selectedRange.surroundContents(span);
      } catch (error) {
        alert("Please select not highlighted text only!");
      }

      setSelectedRange(null);
      setAnchorEl(null);
      window.getSelection().removeAllRanges(); // Deselect text
    }
  };

  const handleClearHighlights = () => {
    const textContainer = textRef.current;
    if (textContainer) {
      const highlightedSpans = textContainer.querySelectorAll(
        "span[style='background-color: yellow;']"
      );
      highlightedSpans.forEach((span) => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize(); // Merge adjacent text nodes
      });
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const value = {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu: (e) => handleTextSelection(e),
    handleHighlight,
    handleClearHighlights,
    handleClose,
  };

  return (
    <HighlightContext.Provider value={value}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  const context = useContext(HighlightContext);
  if (context === undefined) {
    throw new Error("useHighlight must be used within a HighlightProvider");
  }
  return context;
}
