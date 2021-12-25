import { Paper } from "@mui/material";
import Spacer from "../atoms/spacer";
import Comment from "../molecules/comment";
import MainContent from "../molecules/mainContent";

const Main = () => {
  return (
    <Paper elevation={4} sx={{ bgcolor: "white", px: 12, py: 8 }}>
      <MainContent title={"Question"} />
      <Spacer height={32} />
      <Comment title={"Question"} />
      <Spacer height={40} />
      <MainContent title={"Answer"} isAnswer={"true"} />
      <Spacer height={32} />
      <Comment title={"Answer"} />
    </Paper>
  );
};

export default Main;
