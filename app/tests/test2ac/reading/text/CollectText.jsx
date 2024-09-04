import React from "react";
import { Box, Typography } from "@mui/material";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";

const CollectText = () => {
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
        <Typography variant="h5" gutterBottom>
          <b>Why do people collect things?</b>
        </Typography>
        <Box sx={{ marginTop: 2, textAlign: "left" }}>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            People from almost every culture love collecting things. They might
            collect stamps, books, cards, priceless paintings or worthless
            ticket stubs to old sports games. Their collection might hang on the
            walls of a mansion or be stored in a box under the bed. So what is
            it that drives people to collect? Psychologist Dr Maria Richter
            argues that urge to collect is a basic human characteristic.
            According to her, in the very first years of life we form emotional
            connections with lifeless objects such as soft toys. And these
            positive relationships are the starting point for our fascination
            with collecting objects. In fact, the desire to collect may go back
            further still. Scientists suggest that for some ancient humans
            living hundreds of thousands of years ago, collecting may have had a
            serious purpose. Only by collecting sufficient food supplies to last
            though freezing winters or dry summers could our ancestors stay
            alive until the weather improved.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            It turns out that even collecting for pleasure has a very long
            history. In 1925, the archaeologist Leonard Woolley was working at a
            site in the historic Babylonian city of Ur. Woolley had travelled to
            the region intending only to excavate the site of a palace. Instead,
            to his astonishment, he dug up artefacts, which appeared to belong
            to a 2,500- year-old museum. Among the objects was part of a statue
            and a piece of a local building. And accompanying some of the
            artefacts were descriptions like modern-day labels. These texts
            appeared in three languages and were carved into pieces of clay. It
            seems likely that this early private collection of objects was
            created by Princess Ennigaldi, the daughter of King Nabonidus.
            However, very little else is known about Princess Ennigaldi or what
            her motivations were for setting up her collection.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            This may have been one of the first large private collections, but
            it was not the last. Indeed, the fashion for establishing
            collections really got started in Europe around 2,000 years later
            with so-called ‘Cabinets of Curiosities’. These were collections,
            usually belonging to wealthy families that were displayed in
            cabinets or small rooms. Cabinets of Curiosities typically included
            fine paintings and drawings, but equal importance was given to
            exhibits from the natural world such as animal specimens, shells and
            plants.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            Some significant private collections of this sort date from the
            fifteenth century. One of the first belonged to the Medici
            family.The Medicis became a powerful political family in Italy and
            later a royal house, but banking was originally the source of all
            their wealth. The family started by collecting coins and valuable
            gems, then artworks and antiques from around Europe. In 1570 a
            secret ‘studio’ was built inside the Palazzo Medici to house their
            growing collection. This exhibition room had solid walls without
            windows to keep the valuable collection safe.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            In the seventeenth century, another fabulous collection was created
            by a Danish physician name Ole Worm. His collection room contained
            numerous skeletons and specimens, as well as ancient texts and a
            laboratory. One of Ole Worm’s motivations was to point out when
            other researchers had made mistakes, such as the false claim that
            birds of paradise had no feet. He also owned a great auk, species of
            bird that has now become extinct, and the illustration he produced
            of it has been of value to later scientists.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            The passion for collecting was just as strong in the nineteenth
            century. Lady Charlotte Guest spoke at least six languages and
            became well-known for translating English books into Welsh. She also
            travelled widely throughout Europe acquiring old and rare pottery,
            which she added to her collection at home in southern England. When
            Lady Charlotte died in 1895 this collection was given to the
            Victoria and Albert Museum in London. At around the same time in the
            north of England, a wealthy goldsmith named Joseph Mayer was
            building up an enormous collection of artefacts, particularly those
            dug up from sites in his local area. His legacy, the Mayer Trust,
            continues to fund public lectures in accordance with his wishes.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            In the twentieth century, the writer Beatrix Potter had a
            magnificent collection of books, insects, plants and other botanical
            specimens. Most of these were donated to London’s Natural History
            Museum, but Beatrix held on to her cabinets of fossils, which she
            was particularly proud of. In the United Stats, President Franklin
            D. Roosevelt began his stamp collection as a child and continued to
            add to it all his life. The stress associated with being president
            was easier to cope with, Roosevelt said, by taking time out to focus
            on his collection. By the end of his life this had expanded to
            include model ships, coins and artworks.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            Most of us will never own collections so large or valuable as these.
            However, the examples given here suggest that collecting is a
            passion that has been shared by countless people over many
            centuries.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectText;
