import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageTitle from "../../../components/Atoms/PageTitle";
import LabTabs from "../../../components/Organisms/LabTabs";

export default function QuestionList() {
  return (
    <Box sx={{ padding: 5, backgroundColor: "#243661" }}>
      <PageTitle title={"質問一覧"} />
      <Grid container spacing={1} sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <LabTabs />
        </Grid>
      </Grid>
    </Box>
  );
}
