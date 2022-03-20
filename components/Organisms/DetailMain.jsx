import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import Spacer from "../Atoms/Spacer";
import Comment from "../Molecules/Comment";
import Box from "@mui/material/Box";
import QuestionDetailMainContent from "../Molecules/QuestionDetailMainContent";
import AnswerDetailMainContent from "../Molecules/AnswerDetailMainContent";

const postQuestionComment = (e) => {
  console.log(e.target);
};

const DetailMain = (props) => {
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
        <Button variant="contained" onClick={postQuestionComment}>
          <Typography>コメントを投稿する</Typography>
        </Button>
      </Accordion>
      {/* コメント投稿画面 end */}
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
