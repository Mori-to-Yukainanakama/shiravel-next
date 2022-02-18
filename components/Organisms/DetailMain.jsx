import { Paper } from "@mui/material";
import Spacer from "../Atoms/Spacer";
import Comment from "../Molecules/Comment";
import DetailMainContent from "../Molecules/DetailMainContent";

const Main = () => {
  return (
    <Paper elevation={4} sx={{ bgcolor: "white", px: 12, py: 8 }}>
      <DetailMainContent title={"Question"} />
      <Spacer height={32} />
      <Comment title={"Question"} />
      <Spacer height={40} />
      <DetailMainContent title={"Answer"} isAnswer={"true"} />
      <Spacer height={32} />
      <Comment title={"Answer"} />
    </Paper>
  );
};

export default Main;
