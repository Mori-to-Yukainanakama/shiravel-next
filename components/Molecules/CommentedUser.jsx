import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Spacer from "../Atoms/Spacer";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CommentedUser = (props) => {

  return (
    <Box>
      <AccountCircleIcon />
        {props.userName}
      <Typography variant="caption">
        {props.createdAt}
      </Typography>
    </Box>
  );
};

export default CommentedUser;
