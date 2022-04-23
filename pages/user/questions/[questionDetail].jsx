import { Box, Container } from "@mui/material";
import Heading from "../../../components/Organisms/Heading";
import DetailMain from "../../../components/Organisms/DetailMain";
import Spacer from "../../../components/Atoms/Spacer";
import AnswerCreateEditor from "../../../components/Organisms/AnswerCreateEditor";
import { useEffect } from "react";
import axios from "@/libs/axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";

const QuestionDetail = () => {
  const router = useRouter();

  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionComments, setQuestionComments] = useState([]);
  const [questionUserName, setQuestionUserName] = useState();
  const question_id = useRouter().query.questionDetail;
  const [isAnswerEditor, setIsAnswerEditor] = useState(false);
  // モーダル
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // モーダルのstyle
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    // ログインしていたらユーザー情報を取得
    axios
      .get("/api/v1/users/getUser")
      .then((response) => {})
      .catch((error) => {
        console.log(error);
        router.push("/user/login");
      });

    if (question_id != undefined) {
      axios
        .get("/api/v1/questions/detail", {
          params: { question_id: question_id },
        })
        .then((response) => {
          setQuestionUserName(response.data.user.name);
          setQuestion(response.data);
          setAnswers(response.data.answers);
          setQuestionComments(response.data.question_comments);
        });
    }
  }, [question_id, router]);

  return (
    <Box sx={{ bgcolor: "primary.main", py: 8 }}>
      <Container>
        <Heading
          title={question.title}
          createdAt={question.created_at}
          isSolved={question.is_solved}
          isAnswered={question.is_answered}
          questionUserName={questionUserName}
        />
        <Spacer height={20} />
        <DetailMain
          question={question}
          answers={answers}
          questionComments={questionComments}
        />
        <Spacer height={20} />
        <Accordion disableGutters>
          <AccordionSummary>回答を投稿</AccordionSummary>
          <AccordionDetails>
            {/* 回答投稿エディター */}
            <AnswerCreateEditor questionId={question.question_id} />
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default QuestionDetail;
