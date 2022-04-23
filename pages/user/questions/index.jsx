import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageTitle from "../../../components/Atoms/PageTitle";
import LabTabs from "../../../components/Organisms/LabTabs";
import axios from "@/libs/axios";
import { useRouter } from "next/router";

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // ログインしていたらユーザー情報を取得
    axios
      .get("/api/v1/users/getUser")
      .then((response) => {})
      .catch((error) => {
        router.push("/user/login");
      });

    axios.get("/api/v1/questions/").then((response) => {
      setQuestions(response.data);
    });
  }, [router]);

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
