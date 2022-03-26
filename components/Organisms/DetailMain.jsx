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
import SolidBorderLine from "../Atoms/SolidBorderline";
import { useState } from "react";

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

  return (
    <Paper elevation={4} sx={{ bgcolor: "white", px: 12, py: 8 }}>
      <QuestionDetailMainContent
        title={"質問"}
        content={props.question.content}
      />
      {props.questionComments.map((questionComment, index) => {
        return (
          <Comment
            key={index}
            content={questionComment.content}
            userName={questionComment.user.name}
            createdAt={questionComment.created_at}
          />
        );
      })}
      {/* コメント投稿画面 */}
      <Accordion disableGutters>
        <AccordionSummary>
          ここをクリックしてコメント投稿画面を開く
        </AccordionSummary>
        <AccordionDetails>
          <Box
            className="editor"
            sx={{ width: "100%", height: "400px", border: "1px solid gray" }}
          >
            ここにエディターが入る
          </Box>
        </AccordionDetails>
        <Button variant="contained" onClick={handleOpen}>
          プレビュー
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
        <Button variant="contained" onClick={postQuestionComment}>
          <Typography>コメントを投稿する</Typography>
        </Button>
      </Accordion>
      {/* コメント投稿画面 end */}
      <Spacer height={40} />
      <Spacer height={24} />
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
      {props.answers.map((answer, index) => {
        return (
          <Box key={index}>
            <Spacer height={24} />
            <AnswerDetailMainContent
              isAnswered={"true"}
              content={answer.content}
              answerCreatedAt={answer.created_at}
              answerUserName={answer.user.name}
            />
            {answer.answer_comments.map((answerComment, index) => {
              return (
                <Comment
                  key={index}
                  content={answerComment.content}
                  userName={answerComment.user.name}
                  createdAt={answerComment.created_at}
                />
              );
            })}
            {/* コメント投稿画面 */}
            <Accordion disableGutters>
              <AccordionSummary>
                ここをクリックしてコメント投稿画面を開く
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  className="editor"
                  sx={{
                    width: "100%",
                    height: "400px",
                    border: "1px solid gray",
                  }}
                >
                  ここにエディターが入る
                </Box>
              </AccordionDetails>
              <Button variant="contained" onClick={handleOpen}>
                プレビュー
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
              <Button variant="contained" onClick={postQuestionComment}>
                <Typography>コメントを投稿する</Typography>
              </Button>
            </Accordion>
            {/* コメント投稿画面 end */}
          </Box>
        );
      })}
    </Paper>
  );
};

export default DetailMain;
