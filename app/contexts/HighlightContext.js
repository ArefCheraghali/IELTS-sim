"use client";
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
    // This function remains the same
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && !selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const selectedText = range.toString().trim();

      if (selectedText.length <= 1) {
        return;
      }

      if (!isRangeValid(range)) {
        alert("Please select text only.");
        return;
      }

      setSelectedRange(range);
      setAnchorEl(textRef.current);

      // This logic now only applies to the contextmenu event
      setMenuPosition({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    } else {
      setAnchorEl(null);
    }
  };

  useEffect(() => {
    // This useEffect is now simplified
    const handleContextMenu = (event) => {
      event.preventDefault();
      handleTextSelection(event);
    };

    // The 'mouseup' event listener has been REMOVED.
    // We only attach the right-click context menu listener.
    const textRefElement = textRef.current;
    if (textRefElement) {
      textRefElement.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (textRefElement) {
        textRefElement.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []); // The dependency array is empty as it only runs on mount/unmount

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
        parent.normalize();
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
    handleContextMenu: (e) => handleTextSelection(e), // Keep this for direct use if needed
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
