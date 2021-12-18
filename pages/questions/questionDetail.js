import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";

const center_center = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const questionDetail = () => {
  return (
    <>
      {/* Top */}
      <Box
        sx={{
          height: 200,
          bgcolor: "black",
          ...center_center,
        }}
      >
        <Typography variant="h3" component="h3" sx={{ color: "white", p: 1 }}>
          Ask Whatever You Want To Know!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ color: "white", p: 1 }}
        >
          知りたいことはなんでも聞け！
        </Typography>
      </Box>
      {/* Top end */}

      <Box sx={{ bgcolor: "orange", p: 8 }}>
        <Grid container spacing={2}>
          {/* Heading */}
          <Grid item xs={12}>
            <Paper elevation={4} sx={{ bgcolor: "white" }}>
              <Grid container>
                <Grid item xs={9} sx={{ height: 160, p: 2}}>
                  <Box>text</Box>
                </Grid>
                <Grid item xs={3} sx={{ height: 160, p: 2}}>
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
