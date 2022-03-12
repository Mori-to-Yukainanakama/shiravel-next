import { useEffect, useContext } from "react";
import { Paper } from "@mui/material";
import MarkdownEditor from "../../../components/Atoms/MarkdownEditor";
import SendButton from "../../../components/Atoms/FormParts/SendButton";
import MarkdownPreview from "../../../components/Atoms/MarkdownPreview";

import { MarkdownProvider } from "../../../providers/MarkdownProvider";

export default function create() {
  return (
    <>
      <MarkdownProvider>
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
        <SendButton text={"投稿する"} />
      </MarkdownProvider>

      <style jsx>{`
        .markdown-area {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .editor {
          width: 50%;
          min-height: 100%;
          padding: 0 0.4rem;
        }
        .editor h2 {
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
