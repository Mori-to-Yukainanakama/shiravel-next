import axios from "@/libs/axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Input,
  TextField,
  Button,
} from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { StyleContext } from "/providers/StyleProvider";
import { CommonProvider } from "/providers/CommonProvider";
import { PreviewButton } from "/components/Molecules/CreateQuestion/PreviewButton";
import { MarkdownPreview } from "/components/Molecules/CreateQuestion/MarkdownPreview";
import { propsToClassKey } from "@mui/styles";

const AnswerCommentEditor = (props) => {
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
  function createAnswerComment() {
    const data = {
      answer_id: props.answerId,
      content: commentValue,
    };
    axios
      .post("/api/v1/answerComments/create", data)
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
      <CommonProvider>
        <form onSubmit={handleSubmit(createAnswerComment)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              {...register("answerComment", {
                required: true,
              })}
              variant="standard"
              className={"textField"}
              placeholder={"コメントを入力してください"}
              defaultValue={""}
              name={"answerComment"}
              id={"answerComment"}
              cols={"100"}
              rows={"20"}
              onChange={(event) => {
                setCommentValue(event.target.value);
              }}
              error={errors.answerComment}
              label={errors.answerComment && "Error"}
              helperText={errors.answerComment && "必須項目です"}
            />
            <Button className="btn" type="submit">
              送信
            </Button>
          </Box>
        </form>
      </CommonProvider>
    </>
  );
};

export default AnswerCommentEditor;
