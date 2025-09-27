// app/components/TwoColumnLayout.jsx
import { Grid, Paper } from "@mui/material";

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: "75vh", overflowY: "auto" }}>
          {leftContent}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: "75vh", overflowY: "auto" }}>
          {rightContent}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
