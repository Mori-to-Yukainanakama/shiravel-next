import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Spacer from "../Atoms/Spacer";

const CommentedUser = () => {
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
      <p>Mendy</p>
      <Spacer width={12} />
      <Typography variant="caption">2021/12/25 12:25</Typography>
    </Box>
  );
};

export default CommentedUser;
