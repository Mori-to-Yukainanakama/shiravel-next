import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Box, Paper, Typography, Input } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { StyleContext } from "/providers/StyleProvider";
import { CreateProvider } from "/providers/CreateProvider";
import { PreviewButton } from "/components/Molecules/CreateQuestion/PreviewButton";
import { MarkdownPreview } from "/components/Molecules/CreateQuestion/MarkdownPreview";
import { propsToClassKey } from "@mui/styles";

const AnswerCreateEditor = (props) => {

  const { theme } = useContext(StyleContext);
  const [title, setTitle] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /**
   * 回答の投稿
   */
  function createAnswer() {
    const data = {
      question_id: props.questionId,
      content: markdownValue,
    };
    axios
      .post("http://localhost:8000/api/v1/answer/create", data, {withCredentials: true})
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
      <form onSubmit={handleSubmit(createAnswer)}>
        {/* エディター */}
        <div className="editor">
          <ErrorMessage
            errors={errors}
            name="answer"
            render={({ message }) => (
              <Typography
                variant="subtitle2"
                color={"error"}
                sx={{ px: 2, py: 0.5 }}
              >
                {message}
              </Typography>
            )}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <textarea
              {...register("answer", {
                required: { value: true, message: "※必須項目です" },
                pattern: {
                  value: /\S/g,
                  message: "※文字を入力してください",
                },
              })}
              className={"textarea"}
              placeholder={"テキストを入力してください"}
              defaultValue={""}
              name={"answer"}
              id={"answer"}
              cols={"100"}
              rows={"20"}
              onChange={(event) => {
                setCommentValue(event.target.value);
              }}
            />
          </Box>
        </div>
        {/* ボタン */}
        <div className="btn-area">
          <button className="btn" type="submit">
            回答する
          </button>
          <PreviewButton>プレビュー</PreviewButton>
        </div>
        <MarkdownPreview value={markdownValue} />
      </form>
    </CreateProvider>
    <style jsx>{`
        .editor {
          width: 100%;
          height: 400px;
          padding: 0 0.4rem;
        }
        .btn {
          font-family: "IBM Plex Sans", sans-serif;
          font-weight: bold;
          font-size: 0.875rem;
          background-color: ${theme.primary.light};
          margin: 0.5rem 1rem;
          padding: 12px 24px;
          border-radius: 1.2rem;
          color: white;
          transition: all 150ms ease;
          cursor: pointer;
          border: none;
        }
        .btn:hover {
          background-color: ${theme.secondary.main};
        }
        .btn-area {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .textarea {
          width: 100%;
          height: 100%;
          min-height: 400px;
        }
      `}</style>
    </>
  );
};

export default AnswerCreateEditor;
