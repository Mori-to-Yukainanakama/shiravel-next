import { Avatar, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Spacer from "../atoms/spacer";

const Heading = () => {
  return (
    <>
      <Paper elevation={4} sx={{ bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={9} sx={{ p: 4 }}>
            <Typography fontSize={8}>2021/12/25 12:25</Typography>
            <Spacer height={8} />
            <Typography variant="h5">
              Question Title Question Title Question Title Question Title
            </Typography>
            <Spacer height={12} />
            <Stack direction="row" spacing={1}>
              <Chip label="回答済" size="small" color="primary" />
              <Chip label="未解決" size="small" color="error" />
            </Stack>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Avatar
              variant="rounded"
              sx={{ width: 36, height: 36, bgcolor: deepPurple[500] }}
            >
              K
            </Avatar>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Heading;
