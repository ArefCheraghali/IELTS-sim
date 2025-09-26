// app/components/TwoColumnLayout.jsx
import { Grid, Paper } from "@mui/material";

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: "80vh", overflowY: "auto" }}>
          {leftContent}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: "80vh", overflowY: "auto" }}>
          {rightContent}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
