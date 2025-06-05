import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const M32Text = () => {
  return (
    <Box sx={{ userSelect: "text" }}>
      <Typography variant="h5" gutterBottom>
        <b>Notice of public meeting:</b>
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>
          <i>The M32 development</i>
        </b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left", mb: 2 }}>
        <Typography variant="body1" gutterBottom>
          The Fortescue Neighbourhood Action Group is urging residents to attend
          a public meeting to hear the concerns of local residents and families
          of pupils from Fortescue Primary School about the approval of the
          final stage of the M32 motorway.
        </Typography>
        <Typography variant="body1" gutterBottom>
          On 17 April, the Government approved Stage 3 of the M32 motorway
          development, which will affect the Fortescue area. It was not until
          ten days later that this approval was finally announced.
        </Typography>

        <Box
          sx={{
            width: "90%",
            height: "auto",
            my: 1,
            ml: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
            borderStyle: "solid",
            borderWidth: "2px",
            padding: "1em",
            textAlign: "left",
          }}
        >
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            <b>Date: </b> May 5
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            <b>Time: </b> 6:30 p.m.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            <b>Location: </b>Jarrah Community Hall, corner of Fortescue Road and
            Huxley Parade, Fortescue.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            <b>Speakers: </b> Ann Banks (Local council)
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ mb: "10px", ml: 10.5 }}
          >
            Marcin Kowalski (Parents Association, Fortescue Primary)
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ mb: "10px", ml: 10.5 }}
          >
            Louise Chang (President, Conservation Volunteers)
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
            45 minutes will be reserved for questions and public comment.
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          Community organisations successfully lobbied for more dedicated parks
          and for noise restrictions in Zone 1. The developers, BD Construction,
          acted on this due to objections from the community. We have to keep up
          the pressure!
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>Points of concern</b>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
              In the first stage of the development, the majority of wildlife
              and birds in the area moved (or were moved by conservation groups)
              from Zone 1 to Zone 2. Now that Zone 2 is to be developed, no
              policy exists to assist these animals; they have little chance of
              finding an appropriate habitat nearby.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
              It is unclear how the motorway will improve traffic on Packers
              Road.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
              There has been no announcement about how to manage the traffic
              bottleneck in Bradford Street that will result from roadworks.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
              Traffic jams/ gridlock are anticipated on the arterial roads
              surrounding the entry point to the new section of motorway.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
              The Environmental Impact Statement put out by BD Construction for
              Stage 3 does not specifically address the issue of noise and
              pollution in Hyde's Reserve.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
              With Fortescue Primary School just 50 metres from the main
              construction site, school students will be subjected to years of
              dust and noise, and then by unfiltered emissions from vehicle
              exhaust pipes.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          Come along and have your say!
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="h6" gutterBottom>
        <b>Concorde festival</b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left" }}>
        <Typography variant="body1" gutterBottom>
          <b>
            Concorde Festival has always been a family affair and this year is
            no exception!
          </b>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>A</b> <br />
          10:00-17:00 (all day)
          <br />
          <b>Beats and bites </b> <br />
          Hamperdown Avenue will be transformed into an outdoor eatery. Come and
          sample delicacies from nearby restaurants including Georgio's Pizza,
          Al Basha Kebab House and Texas Fry-Up. Lively bands, including
          international act Firehouse will entertain throughout the day.
          <br /> Pedestrian zone, Hamperdown Ave
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>B</b> <br />
          10:00-11:30
          <br />
          <b>Little farmers </b> <br />
          Home Gardening for Kids <br />
          Presented by East City Farms <br />
          Located in the Eco Village (south-west corner of Hamperdown Park)
          <br />
          <b>7th Heaven hip-hop troupe </b> <br />
          Come and see students from East Concorde Middle School show you their
          moves!
          <br />
          Main Stage
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>C</b>
          <br />
          10:30-16:00 <br />
          <b>Hamperdown brew zone</b>
          <br />
          If the excitement of the festival becomes too much, have a break in
          the chill-out zone. We have set up bean-bags, picnic blankets and a
          drinks stand run by local coffee house, Hamperdown Brew, under the
          trees along the eastern side of Hamperdown Park. Vocal acts, such as
          Joss and Bill, along with other graduates from the Concorde School of
          Music, will entertain throughout the day. Pets welcome.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>D</b>
          <br />
          11:00-12:00 <br />
          <b>Poster making</b>
          <br />
          Celebrating the things we love about Concorde! <br />
          Unleash your creativity and maybe win book vouchers, (ages 5-10)
          <br />
          Located in the Kids Workshop Area <br />
          Presented by Hamperdown Library
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>E</b>
          <br />
          12:00-13:00 <br />
          <b>Make it yourself </b>
          <br />
          Alex Mastroianni & Sabine Deleflie, Authors of Make it yourself,
          present Salads & Pickles Talk and Demonstration. Learn to make your
          own pickles with what's in your fridge or garden. <br />
          Sanderson Stage
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>F</b>
          <br />
          13:00-14:00 <br />
          <b>Hamperdown hounds</b>
          <br />
          The annual dog parade and 'dress-up-the-dog' contest has become a
          much-awaited event. Doggie treats will be awarded to winners. <br />
          Northern perimeter of Hamperdown Park.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ borderStyle: "solid", borderWidth: "1px", px: 2, py: 1 }}
        >
          <b>G</b>
          <br />
          14:00-15:30 <br />
          <b>Cartooning and colouring-in activities for kids</b>
          <br />
          Located in the Kids Workshop Area <br />
          Presented and guided by cartoonist and illustrator <br />
          Charlotte Mantel
        </Typography>
      </Box>
    </Box>
  );
};

export default M32Text;
