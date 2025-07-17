import { useState, useRef, useEffect } from "react";

const useTextHighlight = () => {
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
    const textRefElement = textRef.current;
    if (textRefElement) {
      textRefElement.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (textRefElement) {
        textRefElement.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []); // The dependency array is empty

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
      window.getSelection().removeAllRanges();
    }
  };

  const handleClearHighlights = () => {
    // This is the more robust version of clearing highlights
    const textContainer = textRef.current;
    if (textContainer) {
      const highlightedSpans = textContainer.querySelectorAll(
        "span[style='background-color: yellow;']"
      );
      highlightedSpans.forEach((span) => {
        const parent = span.parentNode;
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
        parent.normalize();
      });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    menuPosition,
    textRef,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  };
};

export default useTextHighlight;
