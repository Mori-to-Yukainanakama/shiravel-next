import { Avatar, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Spacer from "../Atoms/Spacer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Heading = (props) => {

  return (
    <Paper elevation={4} sx={{ bgcolor: "background.paper" }}>
      <Grid container>
        <Grid item xs={10} sx={{ px: 6, py: 4 }}>
          <Stack spacing={2} direction={"row"}>
            <Typography variant="caption">
              {props.createdAt}
            </Typography>
          </Stack>
          <Spacer height={12} />
          <Typography variant="h4">
            {props.title}
          </Typography>
          <Spacer height={24} />
          <Stack direction="row" spacing={1}>
            <Chip label={props.isAnswered} color="success" />
            <Chip label={props.isSolved} color="error" />
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
          <AccountCircleIcon />
          <Typography variant="string">
            {props.questionUserName}
          </Typography>
          <Spacer height={6} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Heading;
