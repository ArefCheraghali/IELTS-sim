import React, { useState, useRef } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";

const JellyfishText = () => {
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
      window.getSelection().removeAllRanges();
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
        parent.normalize();
      });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ userSelect: "text" }}>
      <Box
        onContextMenu={handleContextMenu}
        ref={textRef}
        sx={{ userSelect: "text" }}
      >
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
        <Typography variant="h5" gutterBottom>
          <b>Jellyfish: A Remarkable Marine Life Form</b>
        </Typography>
        <Box sx={{ marginTop: 2, textAlign: "left" }}>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            When viewed in the wild, jellyfish are perhaps the most graceful and
            vividly coloured of all sea creatures. But few people have seen a
            jellyfish living in its natural habitat. Instead, they might see a
            dead and shapeless specimen lying on the beach, or perhaps receive a
            painful sting while swimming, so it is inevitable that jellyfish are
            often considered ugly and possibly dangerous. This misunderstanding
            can be partly traced back to the 20<sup>th</sup> century, when the
            use of massive nets and mechanical winches often damaged the
            delicate jellyfish that scientists managed to recover. As a result,
            disappointingly little research was carried out into jellyfish, as
            marine biologists took the easy option and focused on physically
            stronger species such as fish, crabs and shrimp. Fortunately,
            however, new techniques are now being developed. For example,
            scientists have discovered that sound bounces harmlessly off
            jellyfish, so in the Arctic and Norway researchers are using sonar
            to monitor jellyfish beneath the ocean’s surface. This, together
            with aeroplane surveys, satellite imagery and underwater cameras,
            has provided a wealth of new information in recent years.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            Scientists know believe that in shallow water alone there are at
            least 38 million tonnes of jellyfish and these creatures inhabit
            every type of marine habitat, including deep water. Furthermore,
            jellyfish were once regarded as relatively solitary, but this is
            another area where science has evolved. Dr Karen Hansen was the
            first to suggest that jellyfish are in fact the centre of entire
            ecosystems, as shrimp, lobster, and fish shelter and feed among
            their tentacles. This proposition has subsequently been conclusively
            proven by independent studies. DNA sequencing and isotope analysis
            have provided further insights, including the identification of
            numerous additional species of jellyfish unknown to science only a
            few years ago.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            This brings us to the issue of climate change. Research studies
            around the world have recorded a massive growth in jellyfish
            populations in recent years and some scientists have linked this to
            climate change. However, while this may be credible, it cannot be
            established with certainty as other factors might be involved.
            Related to this was the longstanding academic belief that jellyfish
            had no predators and therefore there was no natural process to limit
            their numbers. However, observations made by Paul Dewar and his team
            showed that this was incorrect. As a result, the scientific
            community now recognises that species including sharks, tuna,
            swordfish and some salmon all prey on jellyfish.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            It is still widely assumed that jellyfish are among the simplest
            lifeforms, as they no brain or central nervous system. While this is
            true, we now know they possess senses that allow them to see, feel
            and interact with their environment on subtle ways. What is more,
            analysis of so-called ‘upside-down jellyfish’ shows that they shut
            down their bodies and rest in much the same way that humans do at
            night, something once widely believed to be impossible for
            jellyfish. Furthermore, far from ‘floating’ in the water as they are
            still sometimes thought to do, analysis has shown jellyfish to be
            the most economical swimmers in the animal kingdom. In short,
            scientific progress in recent years has shown that many of our
            established beliefs about jellyfish were inaccurate.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            Jellyfish, though, are not harmless. Their sting can cause a serious
            allergic reaction in some people and large outbreaks of them – known
            as ‘blooms’ – can damage tourist businesses, break fishing nets,
            overwhelm fish farms and block industrial cooling pipes. On the
            other hand, jellyfish are a source of medical collagen used in
            surgery and wound dressings. In addition, a particular protein taken
            from jellyfish has been used in over 30,000 scientific studies of
            serious diseases such as Alzheimer’s. Thus, our relationship with
            jellyfish is complex as there are a range of conflicting factors to
            consider.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            Jellyfish have existed more or less unchanged for at least 500
            million years. Scientists recognise that over the planet’s history
            there have been three major extinction events connected with
            changing environmental conditions. Together, these destroyed 99% of
            all life, but jellyfish lived through all three. Research in the
            Mediterranean Sea has now shown, remarkably, that in old age and on
            the point of death, certain jellyfish are able to revert to an
            earlier physical state, leading to the assertion that they are
            immortal. While this may not technically be true, it is certainly an
            extraordinary discovery. What is more, the oceans today contain 30%
            more poisonous acid than they did 100 years ago, causing problems
            for numerous species, but not jellyfish, which may even thrive in
            more acidic waters. Jellyfish throughout their long history have
            shown themselves to be remarkably resilient.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            Studies of jellyfish in class know as scyphozoa have shown a
            lifecycle of three distinct phases. First, thousands of babies known
            as planulae are released. Them, after a few days the planulae
            develop into polyps – stationary lifeforms that feed off floating
            particles. Finally, these are transformed into something that looks
            like a stack of pancakes, each of which is a tiny jellyfish. It is
            now understood that all species of jellyfish go through similarly
            distinct stages of life. This is further evidence of just how
            sophisticated and unusual these lifeforms are.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JellyfishText;
