import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  Button,
  Fade,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import Spacer from "../Atoms/Spacer";
import Comment from "../Molecules/Comment";
import Box from "@mui/material/Box";
import QuestionDetailMainContent from "../Molecules/QuestionDetailMainContent";
import AnswerDetailMainContent from "../Molecules/AnswerDetailMainContent";
import { useState } from "react";
import QuestionCommentEditor from "./questionCommentEditor";
import AnswerCommentEditor from "./AnswerCommentEditor";
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import SolidBorderLine from "../Atoms/SolidBorderline";

const postQuestionComment = (e) => {
  console.log(e.target);
};

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

const DetailMain = (props) => {
  // モーダル
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [questionCommentOpen, setQuestionCommentOpen] = useState(false);
  const [questionCommentEditorOpen, setQuestionCommentEditorOpen] = useState(false);

  // 回答コメント用の表示/非表示切り替えstate
  const [activeAnswerComment, setActiveAnswerComment] = useState(-1);

  // 回答コメント送信フォーム用の表示/非表示切り替えstate
  const [activeAnswerCommentForm, setActiveAnswerCommentForm] = useState(-1);

  // 質問コメント表示/非表示切り替え関数
  const switchQuestionCommentOpen = () => {
    setQuestionCommentOpen(!questionCommentOpen);
  };

  // 質問コメントフォーム表示/非表示切り替え関数
  const switchQuestionCommentFormOpen = () => {
    setQuestionCommentEditorOpen(!questionCommentEditorOpen);
  };

  // 回答コメント表示/非表示切り替え関数
  const onChangeActiveAnswerComment = (index) => {
    // すでに表示になっていた場合に閉じる
    if (activeAnswerComment == index) {
      setActiveAnswerComment(-1);
    } else {
      setActiveAnswerComment(index);
    }
  };

  // 回答コメント送信フォーム表示/非表示切り替え関数
  const onChangeActiveAnswerCommentForm = (index) => {
    // すでに表示になっていた場合に閉じる
    if (activeAnswerCommentForm == index) {
      setActiveAnswerCommentForm(-1);
    } else {
      setActiveAnswerCommentForm(index);
    }
  };

  // 表示のスタイル
  const activeStyle = {
    display: 'block',
  }

  // 非表示のスタイル
  const noneStyle = {
    display: 'none',
  }

  return (
    <Paper elevation={4} sx={{ bgcolor: "white", px: 12, py: 8 }}>
      <QuestionDetailMainContent
        title={"質問"}
        content={props.question.content}
      />
      {/* 質問コメント表示 */}
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
        <Button onClick={switchQuestionCommentOpen} >
          <ChatIcon />コメント
        </Button>
      </Box>
      {questionCommentOpen &&
        <>
          {props.questionComments.map((questionComment, index) => {
            return (
              <Comment
                key={index}
                content={questionComment.content}
                userName={questionComment.user.name}
                createdAt={questionComment.created_at}
                questionId={props.question.question_id}
                type={"questionComment"}
                createId={questionComment.question_comment_id}
              />
            );
          })}
          <Spacer height={24} />
          {/* 質問コメント投稿画面 */}
          <Button onClick={switchQuestionCommentFormOpen}>
            <SendIcon />
          </Button>
          <Spacer height={20} />
          {/* 質問コメントエディター */}
          {questionCommentEditorOpen && <QuestionCommentEditor questionId={props.question.question_id} />}
          <Spacer height={40} />
        </>
      }
      <Spacer height={100} />
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{
          color: "#cf8807",
          textShadow: "2px 0 #9ba0ab",
        }}
      >
        {"回答_"}
        {Object.keys(props.answers).length}件
      </Typography>
      <SolidBorderLine />
      {/* 回答表示 */}
      {props.answers.map((answer, index) => {
        return (
          <Box key={index}>
            <Spacer height={100} />
            <AnswerDetailMainContent
              isAnswered={"true"}
              content={answer.content}
              answerCreatedAt={answer.created_at}
              answerUserName={answer.user.name}
              answerId={answer.answer_id}
              questionId={props.question.question_id}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
              <Button onClick={() => onChangeActiveAnswerComment(index)} >
                <ChatIcon />コメント
              </Button>
            </Box>
            {/* クリックされた要素のコメントを判定 */}
            <Box sx={activeAnswerComment == index ? activeStyle : noneStyle }>
              {answer.answer_comments.map((answerComment, index) => {
                return (
                  <Comment
                    key={index}
                    content={answerComment.content}
                    userName={answerComment.user.name}
                    createdAt={answerComment.created_at}
                    questionId={props.question.question_id}
                    type={"answerComment"}
                    createId={answerComment.answer_comment_id}
                  />
                );
              })}
              <Spacer height={24} />
              {/* 回答コメント投稿画面 */}
              <Button onClick={() => onChangeActiveAnswerCommentForm(index)}>
                <SendIcon />
              </Button>
              <Spacer height={20} />
              {/* クリックされた要素のコメントを判定 */}
              <Box sx={activeAnswerCommentForm == index ? activeStyle : noneStyle }>
                {/* 回答コメントエディター */}
                <AnswerCommentEditor answerId={answer.answer_id} />
              </Box>
              <Spacer height={40} />
            </Box>
            <Spacer height={50} />
            <SolidBorderLine />
          </Box>
        );
      })}
    </Paper>
  );
};

export default DetailMain;
