import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useHighlight } from "../contexts/HighlightContext";

const ReadingHighlightMenu = () => {
  const {
    anchorEl,
    menuPosition,
    handleClose,
    handleHighlight,
    handleClearHighlights,
  } = useHighlight();

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        menuPosition.mouseY !== null && menuPosition.mouseX !== null
          ? { top: menuPosition.mouseY, left: menuPosition.mouseX }
          : undefined
      }
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={handleHighlight}>Highlight</MenuItem>
      <MenuItem onClick={handleClearHighlights}>Clear Highlights</MenuItem>
    </Menu>
  );
};

export default ReadingHighlightMenu;
