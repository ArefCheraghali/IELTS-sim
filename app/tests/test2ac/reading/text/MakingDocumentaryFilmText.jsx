import React from "react";
import { Box, Typography } from "@mui/material";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";

const MakingDocumentaryFilmText = () => {
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
          <b>Making Documentary Films</b>
        </Typography>
        <Box sx={{ marginTop: 2, textAlign: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>A </b>
            <Typography variant="body1" gutterBottom>
              For much of the twentieth century, documentary films were over
              shadowed by their more successful Hollywood counterparts. For a
              number of reasons, documentaries were frequently ignored by
              critics and film studies courses at universities. Firstly, the
              very idea of documentary film made some people suspicious. As the
              critic Dr Helmut Fischer put it, ‘Documentary makers might have
              ambitions to tell the “truth” and show only “facts” but there is
              no such thing as a non-fiction film. That’s because, as soon as
              you record an incident on camera, you are altering its reality in
              a fundamental way’. Secondly, even supporters of documentaries
              could not agree on a precise definition, which did little to
              improve the reputation of the genre. Lastly, there were also
              concerns about the ethics of filming subjects without their
              consent, which is a necessity in many documentary films.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>B </b>
            <Typography variant="body1" gutterBottom>
              None of this prevented documentaries from being produced, though
              exactly when the process started is open to question. It is often
              claimed that Nanook of the North was the first documentary. Made
              by the American filmmaker Robert J. Flaherty in 1922, the film
              depicts the hard, sometimes heroic lives of native American
              peoples in the Canadian Arctic. Nanook of the North is said to
              have set off a trend that continued though the 1920s with the
              films of Dziga Vertov in the Soviet Union and works by other
              filmmakers around the world. However, that 1922 starting point has
              been disputed by supporters of an earlier date. Among this group
              is film historian Anthony Berwick, who argues that the genre can
              be traced back as early as 1895, when similar films started to
              appear, including newsreels, scientific films and accounts of
              journeys of exploration.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>C </b>
            <Typography variant="body1" gutterBottom>
              In the years following 1922, one particular style of documentary
              started to appear. These films adopted a serious tone while
              depicting the lives of actual people. Cameras were mounted on
              tripods and subjects rehearsed and repeated activities for the
              purposes of the film. British filmmaker John Grierson was an
              important member of this group. Grierson’s career lasted nearly 40
              years, beginning with Drifters (1929) and culminating with I
              Remember, I Remember (1968). However, by the 1960s Grierson’s
              style of film was being rejected by the Direct Cinema movement,
              which wanted to produce more natural and authentic films: cameras
              were hand-held; no additional lighting or sound was used; and the
              subjects did not rehearse. According to film writer Paula Murphy,
              the principles and methods of Direct Cinema brought documentaries
              to the attention of universities and film historians as never
              before. Documentaries started to be recognized as a distinct genre
              worthy of serious scholarly analysis.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>D </b>
            <Typography variant="body1" gutterBottom>
              Starting in the 1980s, the widespread availability of first video
              and then digital cameras transformed filmmaking. The flexibility
              and low cost of these devices meant that anyone could now be a
              filmmaker. Amateurs working from home could compete with
              professionals in ways never possible before. The appearance of
              online film-sharing platforms in the early 2000s only increased
              the new possibilities for amateur documentaries were being made,
              perhaps the most popular documentary of 2006 was still the
              professionally made An Inconvenient Truth. New cameras and digital
              platforms revolutionised the making of films. But as critic Maria
              Fiala has pointed out, ‘ The arguments sometimes put forward that
              these innovations immediately transformed what the public expected
              to see in a documentary isn’t entirely accurate.’
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>E </b>
            <Typography variant="body1" gutterBottom>
              However, a new generation of documentary filmmakers then emerged,
              and with them came a new philosophy of the genre. These filmmakers
              moved away from highlighting political themes or urgent social
              issues. Instead the focus moved inwards, exploring personal lives,
              relationships and emotions. It could be argued that Catfish (2010)
              was a perfect example of this new trend. The film chronicles the
              everyday lives and interactions of the social media generation and
              was both a commercial and critical success. Filmmaker Josh
              Camberwell maintains that Catfish embodies a new realization that
              documentaries are inherently subjective and that this should be
              celebrated. Says Camberwell, ‘It is a requirement for documentary
              makers to express a particular viewpoint and give personal
              responses to the material they are recording.’
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>F </b>
            <Typography variant="body1" gutterBottom>
              The popularity and variety of documentaries today is illustrated
              by the large number of film festivals focusing on the genre around
              the world. The biggest of all must be Hot Docs Festival in Canada,
              which over the years has showcased hundreds of documentaries from
              more than 50 different countries Even older is the Hamburg
              International Short Film Festival. As its name suggests, Hamburg
              specializes in short films, but one category takes this to its
              limits – entries may not exceed three minutes in duration. The
              Short and Sweet Festival is a slightly smaller event held in Utah,
              USA. The small size of the festival means that for first timers
              this is the ideal venue to try to get some recognition for their
              films. Then there is the Atlanta Shortsfest, which is a great
              event for a wide variety of filmmakers. Atlanta welcomes all
              established types of documentaries and recognises the growing
              popularity of animations, with a category specifically for films
              of this type. These are just a few of the scores of film festivals
              on offer, and there are more being established every year. All in
              all, it has never been easier for documentary makers to get their
              films in front of an audience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MakingDocumentaryFilmText;
