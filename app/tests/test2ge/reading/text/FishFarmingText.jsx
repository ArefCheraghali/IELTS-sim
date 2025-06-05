import React from "react";
import { Box, Typography } from "@mui/material";

const FishFarmingText = () => {
  return (
    <Box sx={{ userSelect: "text" }}>
      <Typography variant="h5" gutterBottom>
        <b>Urban fish farming</b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left" }}>
        <Typography variant="h6" gutterBottum>
          New initiatives are making the widespread farming of fish in cities a
          real possibility.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px", mt: 2 }}>
          It is estimated that the world's population will have reached 8
          billion people by the year 2030, which is a matter of concern in terms
          of the global food supply. It is thought that by then, only 38% of
          seafood consumed will come from wild sea life, meaning that the rest
          will be sourced from fish farming. Using a system called aquaponics
          however, it is possible to cultivate both fish and produce (e.g.
          vegetables) in a closed-loop system. The fish waste fertilises the
          plants and the plants purify the water making it habitable for the
          fish. This idea has been used in fish farming for years; recently
          however, there have been some initiatives that are using aquaponics in
          a city environment.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          Many offshore fish farms are experiencing a number of issues. Often,
          the waters where they are located are becoming less attractive as
          habitats because the water is getting warmer and, therefore, has
          higher levels of acidity. In addition to this, this type of farming
          often relies on antibiotics and pesticides. Leftover fish waste can
          pollute the area and have a negative effect on other species. These
          reasons have led researchers and entrepreneurs to investigate
          alternative ways of farming fish.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          New York scientist Martin Schreibman keeps fish in large tanks in his
          laboratory - a very different set- up from a conventional fish farm
          or, for that matter, from a natural ecosystem. He has been working on
          a system that eliminates the use of chemicals in the rearing of the
          fish. This system filters water from the tap and removes waste created
          by the fish. No antibiotics or pesticides are added but he is able to
          control the temperature of the water and has had particular success
          with tilapia fish, which he says are ideal for research thanks to
          their resilience. By making his recirculation system sufficiently
          compact that it can be operated using the city water supply,
          Schreibman believes tanks like his could be used on city rooftops to
          provide residents with fish all year round.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          The idea behind aquaponics is far from new. As far back as 1,000 BC
          farmers in China realised they were able to boost the yield from their
          rice paddies when they let fish swim in the water around the rice and
          fertilise the plants with their waste. Jason Green explains that his
          company, Edenworks, wants to adapt that early knowledge, which used an
          ecosystem that was already there, to the modern situation where the
          ecosystem can be separate and independent from the land. He notes that
          the challenge is to create soil that has the same richness and
          nutrient support as a natural system has.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          In trying to recreate the right balance to produce delicious food,
          Edenworks monitors all conditions on the farms using sensors. The
          company has enlisted the help of professional chef and now Edenworks'
          Head of Product, Sam Yoo, to sample the food once it is harvested. Yoo
          uses his highly-trained palette to help quantify aspects of the food
          like flavour and texture.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          One notable feature of Edenworks farms is that they use a vertical
          design. This enables them to grow up to six times as much produce in
          the same sized space as other systems. They do not use LED or
          fluorescent lights, preferring instead a solar design. Currently they
          sell produce and fish directly to restaurants, but Green explains
          Edenworks would like to get to a point where the aquaponic model of
          food production is integrated into building design from the start. He
          adds that besides providing food, a rooftop farm serves as a layer of
          insulation for the building, thus benefitting the occupants in
          additional ways.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          There are undoubted benefits of urban farming for the environment. The
          average item in an American grocery story currently travels 1500 miles
          on its way to the shelf. Producing food in cities would not only
          vastly reduce the energy required for distribution but would also have
          a positive effect on how fresh and nutritious the fruits and
          vegetables in local communities are.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          Neil Sims of Kampachi Farms has been deeply involved in the
          fish-farming industry, though off the coast of Hawaii rather than in
          cities. Sims and his colleagues have found that they have had to
          overcome the public perception of farmed fish or fish grown in a
          warehouse as being somehow inferior nutritionally. He acknowledges
          that some poorly-executed attempts at fish farming in the past may
          have made people sceptical but notes that the resistance should be
          countered with the possibility of a sustainable, healthy source of
          fish. As Sims points out, if the number of people on Earth approaches
          the expected 11 billion at the end of the century, there will simply
          not be enough fish to feed everyone. That is, of course, unless a new
          way of supplying fish is adopted.
        </Typography>
      </Box>
    </Box>
  );
};

export default FishFarmingText;
