import axios from "@/libs/axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Box, Paper, Typography, Input, TextField } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { StyleContext } from "/providers/StyleProvider";
import { CreateProvider } from "/providers/CreateProvider";
import { PreviewButton } from "/components/Molecules/CreateQuestion/PreviewButton";
import { MarkdownPreview } from "/components/Molecules/CreateQuestion/MarkdownPreview";
import { propsToClassKey } from "@mui/styles";
import { Button } from "@mui/material";

const QuestionCommentEditor = (props) => {
  const { theme } = useContext(StyleContext);
  const [title, setTitle] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /**
   * 質問コメントの投稿
   */
  function createQuestionComment() {
    const data = {
      question_id: props.questionId,
      content: commentValue,
    };
    axios
      .post("/api/v1/questionComments/create", data)
      .then((res) => {
        console.log(res);
        // TODO 質問の詳細画面へリダイレクト
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  }

  return (
    <>
      <CreateProvider>
        <form onSubmit={handleSubmit(createQuestionComment)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              {...register("questionComment", {
                required: true,
              })}
              variant="standard"
              className={"textField"}
              placeholder={"コメントを入力してください"}
              defaultValue={""}
              name={"questionComment"}
              id={"questionComment"}
              cols={"100"}
              rows={"20"}
              onChange={(event) => {
                setCommentValue(event.target.value);
              }}
              error={errors.questionComment}
              label={errors.questionComment && "Error"}
              helperText={errors.questionComment && "必須項目です"}
            />
            <Button className="btn" type="submit">
              送信
            </Button>
          </Box>
        </form>
      </CreateProvider>
    </>
  );
};

export default QuestionCommentEditor;
