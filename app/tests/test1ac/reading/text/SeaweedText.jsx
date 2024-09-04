import React from "react";
import { Box, Typography } from "@mui/material";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";

const SeaweedText = () => {
  const {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  } = useTextHighlight();

  return (
    <Box sx={{ userSelect: "text" }}>
      <Box
        onContextMenu={handleContextMenu}
        ref={textRef}
        sx={{ userSelect: "text" }}
      >
        <HighlightContextMenu
          anchorEl={anchorEl}
          menuPosition={menuPosition}
          handleClose={handleClose}
          handleHighlight={handleHighlight}
          handleClearHighlights={handleClearHighlights}
        />
        <Typography variant="h6" gutterBottom>
          <b>Seaweeds of New Zealand</b>
        </Typography>
        <Box sx={{ marginTop: 2, textAlign: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>A </b>
            <Typography variant="body1" gutterBottom>
              Seaweed is a particularly wholesome food, which absorbs and
              concentrates traces of a wide variety of minerals necessary for
              the body’s health. Many elements may occur in seaweed - aluminum,
              barium, calcium, chlorine, copper, iodine, and iron, to name but a
              few - traces normally produced by erosion and carried to the
              seaweed beds by river and sea currents. Seaweeds are also rich in
              vitamins; indeed, Inuits obtain a high proportion of their bodily
              requirements of vitamin C from the seaweeds they eat. The health
              benefits of seaweed have long been recognized. For instance, there
              is a remarkably low incidence of goiter among the Japanese, and
              also among New Zealand’s indigenous Maori people, who have always
              eaten seaweeds, and this may well be attributed to the high iodine
              content of this food. Research into historical Maori eating
              customs shows that jellies were made using seaweeds, nuts,
              fuchsia, and tutu berries, cape gooseberries, and many other
              fruits both native to New Zealand and sown there from seeds
              brought by settlers and explorers. As with any plant life, some
              seaweeds are more palatable than others, but in a survival
              situation, most seaweeds could be chewed to provide a certain
              sustenance.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>B </b>
            <Typography variant="body1" gutterBottom>
              New Zealand lays claim to approximately 700 species of seaweed,
              some of which have no representation outside that country. Of
              several species grown worldwide, New Zealand also has a
              particularly large share. For example, it is estimated that New
              Zealand has some 30 species of Gigartina, a close relative of
              carrageen or Irish moss. These are often referred to as the New
              Zealand carrageens. The substance called agar which can be
              extracted from these species gives them great commercial
              application in the production of seametal, from which seametal
              custard (a food product) is made, and in the canning, paint, and
              leather industries. Agar is also used in the manufacture of cough
              mixtures, cosmetics, confectionery, and toothpastes. In fact,
              during World War II, New Zealand Gigartina were sent to Australia
              to be used in toothpaste.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>C </b>
            <Typography variant="body1" gutterBottom>
              New Zealand has many of the commercially profitable red seaweeds,
              several species of which are a source of agar (Pterocladia,
              Gelidium, Chondrus, Gigartina). Despite this, these seaweeds were
              not much utilized until several decades ago. Although distribution
              of the Gigartina is confined to certain areas according to
              species, it is only on the east coast of the North Island that its
              occurrence is rare. And even then, the east coast, and the area
              around Hokianga, have a considerable supply of the two species of
              Pterocladia from which agar is also made. New Zealand used to
              import the Northern Hemisphere Irish moss (Chondrus crispus) from
              England and ready-made agar from Japan.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>D </b>
            <Typography variant="body1" gutterBottom>
              Seaweeds are divided into three classes determined by colour —
              red, brown and green — and each tends to live in a specific
              position. However, except for the unmistakable sea lettuce (Ulva),
              few are totally one colour; and especially when dry, some species
              can change colour significantly — a brown one may turn quite
              black, or a red one appear black, brown, pink or purple.
              Identification is nevertheless facilitated by the fact that the
              factors which determine where a seaweed will grow are quite
              precise, and they tend therefore to occur in very well-defined
              zones. Although there are exceptions, the green seaweeds are
              mainly shallow-water algae; the browns belong to the medium
              depths; and the reds are plants of the deeper water, furthest from
              the shore. Those shallow-water species able to resist long periods
              of exposure to sun and air are usually found on the upper shore,
              while those less able to withstand such exposure occur nearer to,
              or below, the low-water mark. Radiation from the sun, the
              temperature level, and the length of time immersed also play a
              part in the zoning of seaweeds. Flat rock surfaces near mid-level
              tides are the most usual habitat of sea-bombs, Venus' necklace,
              and most brown seaweeds. This is also the home of the purple laver
              or Maori karengo, which looks rather like a reddish-purple
              lettuce. Deep-water rocks on open coasts, exposed only at very low
              tide, are usually the site of bull-kelp, strapweeds and similar
              tough specimens. Kelp, or bladder kelp, has stems that rise to the
              surface from massive bases or 'holdfasts', the leafy branches and
              long ribbons of leaves surging with the swells beyond the line of
              shallow coastal breakers or covering vast areas of calmer coastal
              water.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>E </b>
            <Typography variant="body1" gutterBottom>
              Propagation of seaweeds occurs by seed-like spores, or by
              fertilisation of egg cells. None have roots in the usual sense;
              few have leaves; and none have flowers, fruits or seeds. The
              plants absorb their nourishment through their leafy fronds when
              they are surrounded by water; the holdfast of seaweeds is purely
              an attaching organ, not an absorbing one.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>F </b>
            <Typography variant="body1" gutterBottom>
              Some of the large seaweeds stay on the surface of the water by
              means of air-filled floats; others, such as hull-kelp, have large
              cells filled with air. Some which spend a good part of their time
              exposed to the air, often reduce dehydration either by having
              swollen stems that contain water, or they may (like Venus'
              necklace) have swollen nodules, or they may have a distinctive
              shape like a sea-bomb. Others, like the sea cactus, are filled
              with a slimy fluid or have a coating of mucilage on the surface.
              In some of the larger kelps, this coating is not only to keep the
              plant moist, but also to protect it from the violent action of
              waves.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SeaweedText;
