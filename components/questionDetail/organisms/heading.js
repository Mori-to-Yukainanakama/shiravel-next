import { Avatar, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Spacer from "../atoms/spacer";

const Heading = () => {
  return (
    <Paper elevation={4} sx={{ bgcolor: "background.paper" }}>
      <Grid container>
        <Grid item xs={10} sx={{ px: 6, py: 4 }}>
          <Stack spacing={2} direction={"row"}>
            <Typography variant="caption">投稿日：2021/12/25 12:25</Typography>
            <Typography variant="caption">更新日：2021/12/27 12:27</Typography>
          </Stack>
          <Spacer height={12} />
          <Typography variant="h4">
            Question Title Question Title Question Title
          </Typography>
          <Spacer height={24} />
          <Stack direction="row" spacing={1}>
            <Chip label="回答済" color="success" />
            <Chip label="未解決" color="error" />
          </Stack>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 60,
              height: 60,
              bgcolor: deepPurple[500],
              fontSize: "2rem",
            }}
          >
            K
          </Avatar>
          <Spacer height={6} />
          <Typography variant="body1">Kate</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Heading;
