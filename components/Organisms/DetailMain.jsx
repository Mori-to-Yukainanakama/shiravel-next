import { Paper } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Spacer from "../Atoms/Spacer";
import Comment from "../Molecules/Comment";
import DetailMainContent from "../Molecules/DetailMainContent";
import Box from "@mui/material/Box";
import BorderLine from "../Atoms/Borderline";
import QuestionDetailMainContent from "../Molecules/QuestionDetailMainContent";
import AnswerDetailMainContent from "../Molecules/AnswerDetailMainContent";

const DetailMain = (props) => {

  return (
    <Paper elevation={4} sx={{ bgcolor: "white", px: 12, py: 8 }}>
      <QuestionDetailMainContent
        title={"質問"}
        content={props.question.content}
      />
      {props.questionComments.map((questionComment, index) => {
        return <Comment
                  key={index}
                  content={questionComment.content}
                  userName={questionComment.user.name}
                  createdAt={questionComment.created_at}
                />
      })}
      <Spacer height={40} />
      {props.answers.map((answer, index) => {
        return (
          <Box key={index}>
            <AnswerDetailMainContent
              title={"回答"}
              isAnswered={"true"}
              content={answer.content}
              answerCreatedAt={answer.created_at}
              answerUserName={answer.user.name}
              answerItems={Object.keys(props.answers).length}
            />
            {answer.answer_comments.map((answerComment, index) => {
              return (
                <Comment
                  key={index}
                  content={answerComment.content}
                  userName={answerComment.user.name}
                  createdAt={answerComment.created_at}
                />
              )
            })}
          </Box>
        )
      })}
    </Paper>
  );
};

export default DetailMain;
