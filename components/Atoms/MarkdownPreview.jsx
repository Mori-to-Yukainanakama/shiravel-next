// マークダウン関係
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

import { useContext } from "react";
import { Box } from "@mui/material";
import { CreateQuestionContext } from "/providers/CreateQuestionProvider";
import { StyleContext } from "/providers/StyleProvider";
import ExecuteButton from "./ExecuteButton";

function MarkdownPreview() {
  const { markdownValue, isPreview, setPreviewState } = useContext(
    CreateQuestionContext
  );
  const { theme } = useContext(StyleContext);

  if (isPreview) {
    return (
      <>
        <div className={"preview-modal"}>
          <Box
            sx={{
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              height: "70%",
              margin: "auto",
              backgroundColor: "#fff",
              borderRadius: "1.2rem",
            }}
          >
            <div className={"preview"}>
              <ReactMarkdown className={"markdown-body"} remarkPlugins={[gfm]}>
                {markdownValue}
              </ReactMarkdown>
            </div>
            <div className={"btn-area"}>
              <ExecuteButton action={() => setPreviewState(false)}>
                OK
              </ExecuteButton>
            </div>
          </Box>
        </div>

        <style jsx>{`
          .preview-modal {
            display: flex;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            align-items: center;
            justify-content: "center";
            background-color: #00001791;
          }
          .preview {
            width: 100%;
            height: 80%;
            margin-top: 0.6rem;
            padding: 0.8rem 1.4rem;
            overflow: scroll;
          }
          .btn-area {
            margin: auto;
            flex-wrap: wrap;
            text-align: center;
            border-top: ${theme.primary.light} solid 0.1rem;
            justify-content: "center";
          }
        `}</style>
      </>
    );
  } else {
    return null;
  }
}

export default MarkdownPreview;
