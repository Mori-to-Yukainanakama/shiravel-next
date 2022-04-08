import { Avatar, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Spacer from "../Atoms/Spacer";
import moment from "moment";
import { useState } from "react";

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
          <Avatar
            variant="rounded"
            sx={{
              width: 60,
              height: 60,
              bgcolor: deepPurple[500],
              fontSize: "2rem",
            }}
          >
            {props.questionUserName}
          </Avatar>
          <Spacer height={6} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Heading;
