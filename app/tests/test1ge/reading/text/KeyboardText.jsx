import { Box, Divider, Typography } from "@mui/material";

const KeyboardText = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        <b>BENEFICIAL WORK PRACTICES FOR THE KEYBOARD OPERATOR</b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>A </b>
          <Typography variant="body1" gutterBottom>
            Sensible work practices are an important factor in the prevention of
            muscular fatigue; discomfort or pain in the arms, neck, hands or
            back; or eye strain which can be associated with constant or regular
            work at a keyboard and visual display unit (VDU).
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>B </b>
          <Typography variant="body1" gutterBottom>
            It is vital that the employer pays attention to the physical setting
            such as workplace design, the office environment, and placement of
            monitors as well as the organisation of the work and individual work
            habits. Operators must be able to recognise work-related health
            problems and be given the opportunity to participate in the
            management of these. Operators should take note of and follow the
            preventive measures outlined below.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>C </b>
          <Typography variant="body1" gutterBottom>
            The typist must be comfortably accommodated in a chair that is
            adjustable for height with a back rest that is also easily
            adjustable both for angle and height. The back rest and sitting
            ledge (with a curved edge) should preferably be cloth-covered to
            avoid excessive perspiration.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>D </b>
          <Typography variant="body1" gutterBottom>
            When the keyboard operator is working from a paper file or
            manuscript, it should be at the same distance from the eyes as the
            screen. The most convenient position can be found by using some sort
            of holder. Individual arrangement will vary according to whether the
            operator spends more time looking at the VDU or the paper –
            whichever the eyes are focused on for the majority of time should be
            put directly in front of the operator.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>E </b>
          <Typography variant="body1" gutterBottom>
            While keying, it is advisable to have frequent but short pauses of
            around thirty to sixty seconds to proofread. When doing this, relax
            your hands. After you have been keying for sixty minutes, you should
            have a ten minute change of activity. During this spell it is
            important that you do not remain seated but stand up or walk around.
            This period could be profitably used to do filing or collect and
            deliver documents.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>F </b>
          <Typography variant="body1" gutterBottom>
            Generally, the best position for a VDU is at right angles to the
            window. If this is not possible then glare from the window can be
            controlled by blinds, curtains or movable screens. Keep the face of
            the VDU vertical to avoid glare from overhead lighting.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "1em" }}>G </b>
          <Typography variant="body1" gutterBottom>
            Unsatisfactory work practices or working conditions may result in
            aches or pain. Symptoms should be reported to your supervisor early
            on so that the cause of the trouble can be corrected and the
            operator should seek medical attention.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="h6" gutterBottom>
        <b>Workplace dismissals</b>
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: "left" }}>
        <Typography variant="body1" gutterBottom>
          <b>Before the dismissal</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          If an employer wants to dismiss an employee, there is a process to be
          followed. Instances of minor misconduct and poor performance must
          first be addressed through some preliminary steps.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Firstly, you should be given an improvement note. This will explain
          the problem, outline any necessary changes and offer some assistance
          in correcting the situation. Then, if your employer does not think
          your performance has improved, you may be given a written warning. The
          last step is called a final written warning which will inform you that
          you will be dismissed unless there are improvements in performance. If
          there is no improvement, your employer can begin the dismissal
          procedure.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The dismissal procedure begins with a letter from the employer setting
          out the charges made against the employee. The employee will be
          invited to a meeting to discuss these accusations. If the employee
          denies the charges, he is given the opportunity to appear at a formal
          appeal hearing in front of a different manager. After this, a decision
          is made as to whether the employee will be let go or not.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Dismissals</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Of the various types of dismissal, a fair dismissal is the best kind
          if an employer wants an employee out of the workplace. A fair
          dismissal is legally and contractually strong and it means all the
          necessary procedures have been correctly followed. In cases where an
          employee’s misconduct has been very serious, however, an employer may
          not have to follow all of these procedures. If the employer can prove
          that the employee’s behaviour was illegal, dangerous or severely
          wrong, the employee can be dismissed immediately: a procedure known as
          summary dismissal.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sometimes a dismissal is not considered to have taken place fairly.
          One of these types is wrongful dismissal and involves a breach of
          contract by the employer. This could involve dismissing an employee
          without notice or without following proper disciplinary and dismissal
          procedures. Another type, unfair dismissal, is when an employee is
          sacked without good cause.
        </Typography>
        <Typography variant="body1" gutterBottom>
          There is another kind of dismissal, known as constructive dismissal,
          which is slightly peculiar because the employee is not actually openly
          dismissed by the employer. In this case the employee is forced into
          resigning by an employer who tries to make significant changes to the
          original contract. This could mean an employee might have to work
          night shifts after originally signing on for day work, or he could be
          made to work in dangerous conditions.
        </Typography>
      </Box>
    </Box>
  );
};

export default KeyboardText;
