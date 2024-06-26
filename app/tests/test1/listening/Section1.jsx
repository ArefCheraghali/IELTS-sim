import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

export default function Section1({ answers, setAnswers }) {
  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "60rem",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Section 1
          </Typography>
          <Typography variant="h6" gutterBottom>
            Questions 1-10
          </Typography>
        </Box>
        <Typography>Complete the form below.</Typography>
        <Typography>
          Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.
        </Typography>
        <Box sx={{ textAlign: "center", mt: 5, width: "80%" }}>
          <Typography>
            <b>THEATRE ROYAL PLYMOUTH</b>
          </Typography>
          <Typography>Booking Form</Typography>
        </Box>
        <Divider
          variant="middle"
          sx={{
            width: "75%",
            maxWidth: "60rem",
            mt: 2,
            mb: 2,
            bgcolor: "black",
          }}
        />
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "75%", minWidth: "200rem" }}
        >
          <Grid item xs={6}>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                pl: "3rem",
                width: "75%",
              }}
            >
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "20rem" }}>Date: </Typography>
                Saturday
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  label="1"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  value={answers[0]}
                />
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "20em" }}>Time: </Typography>
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  label="2"
                  autoComplete="off"
                  variant="standard"
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  value={answers[1]}
                />
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "19em" }}>Tickets:</Typography>
                three adults and one child
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "19em" }}>Seats in:</Typography>
                the
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="3"
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  value={answers[2]}
                />
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "13em" }}>
                  Seat row/number(s):
                </Typography>
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="4"
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  value={answers[3]}
                />
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "14em" }}>
                  Method of delivery:
                </Typography>
                post
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "16em" }}>
                  Total payment:
                </Typography>
                39 pounds
              </ListItem>
              <Divider
                variant="middle"
                sx={{
                  width: "65%",
                  maxWidth: "60rem",
                  mt: 2,
                  mb: 2,
                  bgcolor: "black",
                }}
              />
              <Typography sx={{ ml: 2 }}>Card details:</Typography>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "15em", marginLeft: "5em" }}>
                  Type:
                </Typography>
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="5"
                  onChange={(e) => handleInputChange(4, e.target.value)}
                  value={answers[4]}
                />
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "14em", marginLeft: "5em" }}>
                  Number:
                </Typography>
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="6"
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  value={answers[5]}
                />
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "15em", marginLeft: "5em" }}>
                  Name:
                </Typography>
                Mr J.
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="7"
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  value={answers[6]}
                />
              </ListItem>
              <Divider
                variant="middle"
                sx={{
                  width: "65%",
                  maxWidth: "60rem",
                  mt: 2,
                  mb: 2,
                  bgcolor: "black",
                }}
              />
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "19em" }}>Address:</Typography>
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="8"
                  onChange={(e) => handleInputChange(7, e.target.value)}
                  value={answers[7]}
                />
                Street, London
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "23em" }}></Typography>
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="9"
                  onChange={(e) => handleInputChange(8, e.target.value)}
                  value={answers[8]}
                />
              </ListItem>
              <Divider
                variant="middle"
                sx={{
                  width: "65%",
                  maxWidth: "60rem",
                  mt: 2,
                  mb: 2,
                  bgcolor: "black",
                }}
              />
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "14em" }}>
                  Additional requests:
                </Typography>
                put on the mailing list
              </ListItem>
              <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ marginRight: "23em" }}></Typography>
                book
                <TextField
                  sx={{ mt: -2, ml: 1 }}
                  autoComplete="off"
                  variant="standard"
                  label="10"
                  onChange={(e) => handleInputChange(9, e.target.value)}
                  value={answers[9]}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
