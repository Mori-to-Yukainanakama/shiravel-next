import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Box, Paper, Typography, Input } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { StyleContext } from "/providers/StyleProvider";
import { CreateQuestionProvider } from "/providers/CreateQuestionProvider";
import { PreviewButton } from "/components/Molecules/CreateQuestion/PreviewButton";
import { MarkdownPreview } from "/components/Molecules/CreateQuestion/MarkdownPreview";

export default function Create() {
  const { theme } = useContext(StyleContext);
  const [title, setTitle] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /**
   * 質問の投稿
   */
  function createQuestion() {
    const data = {
      // user_id: props.id,
      title: title,
      content: markdownValue,
    };

    axios
      .post("http://localhost:8000/api/v1/questions/create", data, {withCredentials: true})
      .then((res) => {
        console.log(res);
        // TODO 質問の詳細画面へリダイレクト
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <CreateQuestionProvider>
        <form onSubmit={handleSubmit(createQuestion)}>
          {/* タイトル */}
          <Paper sx={{ px: 6, py: 2, display: "block" }}>
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => (
                <Typography
                  variant="subtitle2"
                  color={"error"}
                  sx={{ px: 2, py: 1 }}
                >
                  {message}
                </Typography>
              )}
            />
            <Input
              label="title"
              type={"text"}
              {...register("title", {
                required: { value: true, message: "※必須項目です" },
                maxLength: 50,
                pattern: {
                  value: /\S/g,
                  message: "※文字を入力してください",
                },
              })}
              placeholder={"タイトルを入力してください"}
              onChange={(event) => setTitle(event.target.value)}
              sx={{ width: "100%" }}
            />
          </Paper>

          {/* エディター */}
          <Paper sx={{ px: 6, py: 4, display: "flex" }}>
            <div className="editor">
              <ErrorMessage
                errors={errors}
                name="question"
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
                  {...register("question", {
                    required: { value: true, message: "※必須項目です" },
                    pattern: {
                      value: /\S/g,
                      message: "※文字を入力してください",
                    },
                  })}
                  className={"textarea"}
                  placeholder={"テキストを入力してください"}
                  defaultValue={""}
                  name={"question"}
                  id={"question"}
                  cols={"100"}
                  rows={"20"}
                  onChange={(event) => {
                    setMarkdownValue(event.target.value);
                  }}
                />
              </Box>
            </div>
          </Paper>

          {/* ボタン */}
          <div className="btn-area">
            <button className="btn" type="submit">
              登録する
            </button>
            <PreviewButton>プレビュー</PreviewButton>
          </div>
          <MarkdownPreview value={markdownValue} />
        </form>
      </CreateQuestionProvider>

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
}
