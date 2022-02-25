import { Box, Typography } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import CommentedUser from "./CommentedUser";

const Comment = ({ title }) => {
  return (
    <Box sx={{ width: "90%", ml: "auto" }}>
      <Typography variant="h6">{title} Comment</Typography>
      <Spacer height={8} />
      <Borderline />
      <Spacer height={16} />
      <Box sx={{ width: "98%", ml: "auto" }}>
        <CommentedUser />
        <Spacer height={4} />
        <Box sx={{ pl: 6 }}>
          <p>
            Nobis mollitia reprehenderit vero eius, dolorum vel provident.Nobis
            mollitia reprehenderit vero eius, dolorum vel provident.
          </p>
          <p>
            Nobis mollitia reprehenderit vero eius, dolorum vel provident.Nobis
            mollitia reprehenderit vero eius, dolorum vel provident.
          </p>
          <p>
            Nobis mollitia reprehenderit vero eius, dolorum vel provident.Nobis
            mollitia reprehenderit vero eius, dolorum vel provident.
          </p>
        </Box>
      </Box>
      <Spacer height={16} />
      <Box sx={{ width: "98%", ml: "auto" }}>
        <CommentedUser />
        <Spacer height={4} />
        <Box sx={{ pl: 6 }}>
          <p>
            Nobis mollitia reprehenderit vero eius, dolorum vel provident.Nobis
            mollitia reprehenderit vero eius, dolorum vel provident.
          </p>
          <p>
            Nobis mollitia reprehenderit vero eius, dolorum vel provident.Nobis
            mollitia reprehenderit vero eius, dolorum vel provident.
          </p>
          <p>
            Nobis mollitia reprehenderit vero eius, dolorum vel provident.Nobis
            mollitia reprehenderit vero eius, dolorum vel provident.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;
