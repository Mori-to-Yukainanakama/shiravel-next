import { Box, Container } from "@mui/material";
import Heading from "../../../components/Organisms/Heading";
import DetailMain from "../../../components/Organisms/DetailMain";
import Spacer from "../../../components/Atoms/Spacer";
import Editor from "../../../components/Molecules/Editor";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const QuestionDetail = () => {

  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionComments, setQuestionComments] = useState([]);
  const [questionUserName, setQuestionUserName] = useState();
  const question_id = useRouter().query.questionDetail;

  useEffect(() => {

    if (question_id != undefined) {
      axios.get("http://localhost:8000/api/v1/questions/detail", {params:{question_id: question_id}}).then((response) => {
        // console.log(response.data.user.name);
        setQuestionUserName(response.data.user.name);
        setQuestion(response.data);
        setAnswers(response.data.answers);
        setQuestionComments(response.data.question_comments);
      });
    }
    // ※ 注意ですが、最後の, []がないと何度も何度もデータを取得することになるので注意！
  },[question_id]);

  return (
      <Box sx={{ bgcolor: "primary.main", py: 8 }}>
        {console.log(question.user)}
        <Container>
          <Heading
           title={question.title}
           createdAt={question.created_at}
           isSolved={question.is_solved}
           isAnswerd={question.is_answerd}
           questionUserName={questionUserName}
          />
          <Spacer height={20} />
          <DetailMain
            question={question}
            answers={answers}
            questionComments={questionComments}
          />
          <Spacer height={20} />
          <Editor />
        </Container>
      </Box>
  );
};

export default QuestionDetail;
