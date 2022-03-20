import { useContext } from "react";
import { Paper, Input } from "@mui/material";
import { CreateQuestionContext } from "/providers/CreateQuestionProvider";

function PostTitle() {
  const { title, setTitle } = useContext(CreateQuestionContext);

  return (
    <Paper sx={{ px: 6, py: 2, display: "flex" }}>
      <Input
        type={"text"}
        defaultValue={title}
        name={"questionTitle"}
        placeholder={"タイトルを入力してください"}
        onChange={(event) => setTitle(event.target.value)}
        sx={{ width: "100%" }}
      />
    </Paper>
  );
}

export default PostTitle;
