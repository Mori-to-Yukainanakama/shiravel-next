import { useContext } from "react";
import { Box, Paper } from "@mui/material";
import { CreateQuestionContext } from "/providers/CreateQuestionProvider";
import { TextArea } from "/components/Atoms/TextArea";

function MarkdownEditor() {
  const { markdownValue, setMarkdownValue } = useContext(CreateQuestionContext);

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
