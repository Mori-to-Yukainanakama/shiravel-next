import { Paper } from "@mui/material";
import Spacer from "../Atoms/Spacer";
import Comment from "../Molecules/Comment";
import MainContent from "../Molecules/MainContent";

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
