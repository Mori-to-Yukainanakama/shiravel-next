import { Paper } from "@mui/material";
import PostTitle from "/components/Molecules/PostTitle";
import MarkdownEditor from "/components/Atoms/MarkdownEditor";
import MarkdownPreview from "/components/Atoms/MarkdownPreview";
import PostQuestionButton from "/components/Molecules/PostQuestionButton";

import { CreateQuestionProvider } from "/providers/CreateQuestionProvider";

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
        <PostQuestionButton text={"投稿する"} />
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
      `}</style>
    </>
  );
}
