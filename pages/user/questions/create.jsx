import { Paper } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import MarkdownEditor from "/components/Atoms/MarkdownEditor";
import MarkdownPreview from "/components/Atoms/MarkdownPreview";
import PostTitle from "/components/Molecules/CreateQuestion/PostTitle";
import { CreateQuestionProvider } from "/providers/CreateQuestionProvider";
import PreviewButton from "/components/Molecules/CreateQuestion/PreviewButton";
import PostQuestionButton from "/components/Molecules/CreateQuestion/PostQuestionButton";

export default function create() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <CreateQuestionProvider>
        <PostTitle />
        <Paper sx={{ px: 6, py: 6, display: "flex" }}>
          <div className="editor">
            <MarkdownEditor />
          </div>
        </Paper>
        <div className="btn-area">
          <PostQuestionButton text={"投稿する"} />
          <PreviewButton>プレビュー</PreviewButton>
        </div>
        <MarkdownPreview />
      </CreateQuestionProvider>

      <style jsx>{`
        .editor {
          width: 100%;
          height: 400px;
          padding: 0 0.4rem;
        }
        .btn-area {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
