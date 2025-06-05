import { Box, Divider, Typography } from "@mui/material";

const EmergencyText = () => {
  return (
    <Box sx={{ userSelect: "text" }}>
      <Typography variant="h5" gutterBottom>
        <b>EMERGENCY PROCEDURES</b>
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>
          <i>Revised July 2011</i>
        </b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <i>This applies to all persons on the school campus</i>
      </Typography>
      <Typography variant="body2" gutterBottom>
        In cases of emergency (e.g. fire), find the nearest teacher who will:
        send a messenger at full speed to the Office OR inform the Office via
        phone ext. 99.
      </Typography>
      <Typography variant="h5" gutterBottom>
        <b>PROCEDURE FOR EVACUATION</b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left", mb: 2 }}>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          1. Warning of an emergency evacuation will be marked by a number of
          short bell rings. (In the event of a power failure, this may be a
          hand-held bell or siren.)
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          2. All class work will cease immediately.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          3. Students will leave their bags, books and other possessions where
          they are.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          4. Teachers will take the class rolls.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          5. Classes will vacate the premises using the nearest staircase. If
          these stairs are inaccessible, use the nearest alternative staircase.
          Do not use the lifts. Do not run.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          6. Each class, under the teacher’s supervision, will move in a brisk,
          orderly fashion to the paved quadrangle area adjacent to the car park.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          7. All support staff will do the same.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          8. The Marshalling Supervisor, Ms Randall, will be wearing a red cap
          and she will be waiting there with the master timetable and staff list
          in her possession.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          9. Students assemble in the quad with their teacher at the time of
          evacuation. The teacher will do a head count and check the roll.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          10. Each teacher sends a student to the Supervisor to report whether
          all students have been accounted for. After checking, students will
          sit down (in the event of rain or wet pavement they may remain
          standing).
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          11. The Supervisor will inform the Office when all staff and students
          have been accounted for.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          12. All students, teaching staff and support personnel remain in the
          evacuation area until the All Clear signal is given.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          13. The All Clear will be a long bell ring or three blasts on the
          siren.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          14. Students will return to class in an orderly manner under teacher
          guidance.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
          15. In the event of an emergency occurring during lunch or breaks,
          students are to assemble in their home-room groups in the quad and
          await their home-room teacher.
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="h6" gutterBottom>
        <b>Community Education</b>
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>SHORT COURSES: BUSINESS</b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left" }}>
        <Typography variant="body1" gutterBottom>
          <b>Business Basics</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Gain foundation knowledge for employment in an accounts position with
          bookkeeping and business basics through to intermediate level;
          suitable for anyone requiring knowledge from the ground up.
          <br /> Code B/ED011
          <br /> 16<sup>th</sup> or 24<sup>th</sup> April 9am–4pm <br />
          Cost $420
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Bookkeeping</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          This course will provide students with a comprehensive understanding
          of bookkeeping and a great deal of hands-on experience.
          <br /> Code B/ED020
          <br /> 19<sup>th</sup> April 9am–2.30pm (one session only so advance
          bookings essential) <br />
          Cost $250
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>New Enterprise Module</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Understand company structures, tax rates, deductions, employer
          obligations, profit and loss statements, GST and budgeting for tax.
          <br /> Code B/ED030
          <br /> 15<sup>th</sup> or 27<sup>th</sup> May 6am-9pm <br />
          Cost $105
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Social Networking – the Latest Marketing Tool</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          This broad overview gives you the opportunity to analyse what web
          technologies are available and how they can benefit your organisation.
          <br /> Code B/ED033
          <br /> 1<sup>st</sup> or 8<sup>th</sup> or 15<sup>th</sup> June
          6am-9pm <br />
          Cost $95
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Communication</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Take the fear out of talking to large gatherings of people. Gain the
          public-speaking experience that will empower you with better
          communication skills and confidence.
          <br /> Code B/ED401
          <br /> 12<sup>th</sup> or 13<sup>th</sup> or 14<sup>th</sup> July
          6am-9pm <br />
          Cost $90
        </Typography>
      </Box>
    </Box>
  );
};

export default EmergencyText;
