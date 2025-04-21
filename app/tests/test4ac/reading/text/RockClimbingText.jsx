import React from "react";
import { Box, Typography } from "@mui/material";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";

const RockClimbingText = () => {
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
        <Box sx={{ marginTop: 2, textAlign: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>A </b>
            <Typography variant="body1" gutterBottom>
              In the early days of mountaineering, questions of safety,
              standards of practice, and environmental impact were not widely
              considered. The sport gained traction following the successful
              1786 ascent of Mont Blanc, the highest peak in Western Europe, by
              two French mountaineers, Jacques Balmat and Michel-Gabriel
              Paccard. This event established the beginning of modern
              mountaineering, but the sole consideration over the next hundred
              years was the success or failure of climbers in reaching the
              summit and claiming the prestige of having made the first ascent.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>B </b>
            <Typography variant="body1" gutterBottom>
              Toward the end of the nineteenth century, however, developments in
              technology spurred debate regarding climbing practices. Of
              particular concern in this era was the introduction of pitons
              (metal spikes that climbers hammer into the rock face for
              leverage) and the use of{" "}
              <i>
                belaying<sup>2</sup>
              </i>{" "}
              techniques. A few, such as Italian climber Guido Ray, supported
              these methods as ways to render climbing less burdensome and more
              ‘acrobatic’. Others felt that they were only of value as a safety
              net if all else failed. Austrian Paul Preuss went so far as to
              eschew all artificial aids, scaling astonishing heights using only
              his shoes and his bare hands. Albert Mummery, a well known British
              mountaineer and author who climbed the European Alps, and, more
              famously, the Himalayas, where he died at the age of 39 attempting
              a notoriously difficult ascent, developed the notion of ‘fair
              means’ as a kind of informal protocol by which the use of
              ‘walk-through’ guidebooks and equipment such as ladders and
              grappling hooks were discouraged.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>C </b>
            <Typography variant="body1" gutterBottom>
              By the 1940s, bolts had begun to replace pitons as the climber’s
              choice of equipment, and criticism surrounding their use was no
              less fierce. In 1948, when two American climbers scaled Mount
              Brussels in the Canadian Rockies using a small number of pitons
              and bolts, climber Frank Smythe wrote of their efforts: ‘I still
              regard Mount Brussels as unclimbed, and my feelings are no
              different from those I should have were I to hear that a
              helicopter had deposited its passenger on the summit of that
              mountain just so that he could boast that he had trodden an
              untrodden mountain top.’
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>D </b>
            <Typography variant="body1" gutterBottom>
              Climbing purists aside, it was not until the 1970s that the
              general tide began to turn against bolting and pitons. The USA,
              and much of the western world, was waking up to the damage it had
              been causing to the planet, and environmentalist campaigns and new
              government policies were becoming widespread. This new awareness
              and sensitivity to environmental issues spilled over into the rock
              climbing community. As a result, a stripped-down style of rock
              climbing known as ‘clean climbing’ became widely adopted. Clean
              climbing helped preserve rock faces and, compared with older
              approaches, it was much simpler to practise. This was partly due
              to the hallmark of clean climbing – the use of nuts – which were
              favoured over bolts because they could be placed into the rock
              wall with one hand while climbers maintained their grip on the
              rock with the other.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>E </b>
            <Typography variant="body1" gutterBottom>
              Not everyone embraced the clean climbing movement, however. A
              decade later, debates over two more developments were erupting.
              The first related to the practice of chipping, in which climbers
              chip away pieces of rock in order to create tiny cracks in which
              to insert their fingers. The other major point of contention was a
              process that involves setting bolts in reverse from the top of the
              climb down. Rappel bolting makes almost any rock face climbable
              with relative ease, and as a result of this new technique, the
              sport has lost much of its risk factor and sense of pioneering
              spirit; indeed, it has become more about muscle power and
              technical mastery than a psychological trial of fearlessness under
              pressure. Because of this shift in focus, many amateur climbers
              have flocked to indoor climbing gyms, where the risk of serious
              harm is negligible.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>F </b>
            <Typography variant="body1" gutterBottom>
              Given the environmental damage rock climbing can cause, this may
              be a positive outcome. It is ironic that most rock climbers and
              mountaineers love the outdoors and have great respect for the
              majesty of nature and the impressive challenges she poses, but
              that in the pursuit of their goals they inevitably trample
              sensitive vegetation, damaging and disturbing delicate flora and
              lichens which grow on ledges and cliff faces. Two researchers from
              a Canadian university, Doug Larson and Michelle McMillan, have
              found that rock faces that are regularly climbed have lost up to
              80% of the coverage and diversity of native plant species. If that
              were not bad enough, non-native species have also been
              inadvertently introduced, having been carried in on climbers’
              boots.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>G </b>
            <Typography variant="body1" gutterBottom>
              This leaves rock climbing with an uncertain future. Climbers are
              not the only user group that wishes to enjoy the wilderness –
              hikers, mountain bikers and horseback riders visit the same areas,
              and more importantly, they are much better organised, with long
              established lobby groups protecting their interests. With
              increased pressure on limited natural resources, it has been
              suggested that climbers put aside their differences over the
              ethics of various climbing techniques, and focus on the effect of
              their practices on the environment and their relationship with
              other users and landowners.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "1em" }}>H </b>
            <Typography variant="body1" gutterBottom>
              In any event, there can be no doubt that the era of the rock
              climber as a lone wolf or intrepid pioneer is over. Like many
              other forms of recreation, rock climbing has increasingly come
              under the fold of institutional efforts to curb dangerous
              behaviour and properly manage our natural environments. This may
              have spoiled the magic, but it has also made the sport safer and
              more sustainable, and governing bodies would do well to consider
              heightening such efforts in the future.
            </Typography>
          </Box>
          2-fastening or controlling of a climber’s rope by wrapping it around a
          metal device or another person
        </Box>
      </Box>
    </Box>
  );
};

export default RockClimbingText;
