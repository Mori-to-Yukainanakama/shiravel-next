import { Paper } from "@mui/material";
import MarkdownEditor from "/components/Atoms/MarkdownEditor";
import MarkdownPreview from "/components/Atoms/MarkdownPreview";
import PostTitle from "/components/Molecules/CreateQuestion/PostTitle";
import { CreateQuestionProvider } from "/providers/CreateQuestionProvider";
import PreviewButton from "/components/Molecules/CreateQuestion/PreviewButton";
import PostQuestionButton from "/components/Molecules/CreateQuestion/PostQuestionButton";

export default function create() {
  return (
    <>
      <CreateQuestionProvider>
        <PostTitle />
        <Paper sx={{ px: 6, py: 6, display: "flex" }}>
          <div className="editor">
            <MarkdownEditor />
          </div>
          <div className="editor">
            <div className="preview">
              <h2 className="title">プレビュー</h2>
              <MarkdownPreview />
            </div>
          </div>
        </Paper>
        <div className="btn-area">
          <PostQuestionButton text={"投稿する"} />
          <PreviewButton>プレビュー</PreviewButton>
        </div>
      </CreateQuestionProvider>

      <style jsx>{`
        .markdown-area {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .editor {
          width: 50%;
          height: 400px;
          padding: 0 0.4rem;
        }
        .editor h2 {
          height: 10%;
          padding: 0.3rem;
          color: white;
          background-color: #342950;
        }
        .preview {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: 0.1rem solid;
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
