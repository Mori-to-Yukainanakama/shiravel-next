import { Box, Grid, Paper, Typography } from "@mui/material";

const questionDetail = () => {
  return (
    <>
      {/* Top */}
      <Box
        sx={{
          alignItems: "center",
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          height: 200,
          justifyContent: "center",
        }}
      >
      </Box>
      {/* Top end */}

      <Box sx={{ bgcolor: "orange", p: 2 }}>
        <Grid container spacing={2}>
          {/* Heading */}
          <Grid item xs={12}>
            <Paper elevation={4} sx={{ bgcolor: "white" }}>
              <Grid container>
                <Grid item xs={9} sx={{ height: 160, p: 2 }}>
                  <Box>text</Box>
                </Grid>
                <Grid item xs={3} sx={{ height: 160, p: 2 }}>
                  <Box>text</Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* Heading end */}

          {/* Main */}
          <Grid item xs={9}>
            <Paper elevation={4} sx={{ bgcolor: "white", height: 400, p: 2 }}>
              <Box>Main</Box>
            </Paper>
          </Grid>
          {/* Main end */}

          {/* Sidebar */}
          <Grid item xs={3}>
            <Paper elevation={4} sx={{ bgcolor: "white", height: 400, p: 2 }}>
              <Box>Sidebar</Box>
            </Paper>
          </Grid>
          {/* Sidebar end */}
        </Grid>
      </Box>
    </>
  );
};

export default questionDetail;
