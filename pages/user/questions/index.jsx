
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageTitle from "../../../components/Atoms/PageTitle";
import LabTabs from "../../../components/Organisms/LabTabs";
import axios from "axios";

export default function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/questions/').then((response) => {
      setQuestions(response.data);
    });
    // ※ 注意ですが、最後の, []がないと何度も何度もデータを取得することになるので注意！
  },[]);

  return (
    <Box sx={{ bgcolor: "primary.main", py: 5 }}>
      <PageTitle title={"質問一覧"} />
      <Grid container spacing={1} sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <LabTabs questions={questions} />
        </Grid>
      </Grid>
    </Box>
  );
}
