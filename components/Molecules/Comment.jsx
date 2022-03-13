import { Box, Typography } from "@mui/material";
import BorderLine from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import CommentedUser from "./CommentedUser";

const Comment = (props) => {

  return (
    <Box sx={{ width: "90%", ml: "auto" }}>
      <Spacer height={16} />
      <Box sx={{ width: "98%", ml: "auto", p: 2 }}>
        <CommentedUser
          userName={props.userName}
          createdAt={props.createdAt}
        />
        <Box sx={{ p: 5 }}>
          {props.content}
        </Box>
      </Box>
      <BorderLine />
      <Spacer height={16} />
    </Box>
  );
};

export default Comment;
