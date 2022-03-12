import { useContext } from "react";
import { Box, Paper } from "@mui/material";
import { MarkdownContext } from "/providers/MarkdownProvider";
import { TextArea } from "/components/Atoms/FormParts/TextArea";

function MarkdownEditor() {
  const { markdownValue, setMarkdownValue } = useContext(MarkdownContext);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TextArea
        placeholder={"テキストを入力してください"}
        defaultValue={markdownValue}
        name={"markdown"}
        id={"markdown"}
        setAction={setMarkdownValue}
      />
    </Box>
  );
}

export default MarkdownEditor;
