import { Avatar, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Spacer from "../atoms/spacer";
import Editor from "../atoms/editor";
import Comment from "../molecules/comment";
import MainContent from "../molecules/mainContent";

const Main = () => {
  return (
    <>
      <Paper elevation={4} sx={{ bgcolor: "white", px: 8, py: 6 }}>
        <MainContent title={"Question"} />

        <Spacer height={12}></Spacer>

        <Comment title={"Question"} />

        <Spacer height={40}></Spacer>

        <MainContent title={"Answer"} />
        <Spacer height={12}></Spacer>

        <Comment title={"Answer"} />

        {/* Editor */}
        <Editor />
        {/* Editor end */}
      </Paper>
    </>
  );
};

export default Main;
