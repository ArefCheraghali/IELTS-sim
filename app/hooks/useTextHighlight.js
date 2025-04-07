import { useState, useRef } from "react";

const useTextHighlight = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [menuPosition, setMenuPosition] = useState({
    mouseX: null,
    mouseY: null,
  });
  const textRef = useRef(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      if (!isRangeValid(range)) {
        alert("Please select text only.");
        return;
      }

      setSelectedRange(range);
      setAnchorEl(event.currentTarget);
      setMenuPosition({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    }
  };

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
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
        parent.normalize(); // Merge adjacent text nodes
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
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  };
};

export default useTextHighlight;
