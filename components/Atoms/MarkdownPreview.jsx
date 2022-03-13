import { useContext } from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { MarkdownContext } from "/providers/MarkdownProvider";

function MarkdownPreview() {
  const { markdownValue } = useContext(MarkdownContext);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "90%",
        }}
      >
        <div className="preview">
          <ReactMarkdown>{markdownValue}</ReactMarkdown>
        </div>
      </Box>

      <style jsx>{`
        .preview {
          width: 100%;
          height: 100%;
          padding: 0.5rem 1rem;
          overflow: scroll;
        }
      `}</style>
    </>
  );
}

export default MarkdownPreview;
