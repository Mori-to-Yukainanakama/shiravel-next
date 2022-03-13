import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Spacer from "../Atoms/Spacer";
import moment from "moment";

const CommentedUser = (props) => {

  const Date = (date) => {
    return moment(date).format('YYYY-MM-DD');
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        variant="rounded"
        sx={{
          width: 24,
          height: 24,
          bgcolor: deepOrange[500],
          fontSize: ".8rem",
        }}
      >
        M
      </Avatar>
      <Spacer width={12} />
      <p>{props.userName}</p>
      <Spacer width={12} />
      <Typography variant="caption">
        {/* 投稿日 */}
        {Date(props.createdAt)}
      </Typography>
    </Box>
  );
};

export default CommentedUser;
