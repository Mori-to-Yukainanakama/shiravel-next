import { Avatar, Box, Typography } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import moment from "moment";
import SolidBorderLine from "../Atoms/SolidBorderline";


const MainContent = (props) => {

  return (
    <Box>
      <Box sx={{ px: 2 }}>
        {props.content}
        <Spacer height={12} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography variant="caption">
            {props.answerCreatedAt}
          </Typography>
          <Spacer width={24} />
          <Avatar
            variant="rounded"
            sx={{
              width: 32,
              height: 32,
              bgcolor: "primary.main",
              fontSize: "1.1rem",
            }}
          >
            {props.answerUserName}
          </Avatar>
        </Box>
      </Box>
      <Spacer height={24} />
      <Borderline />
    </Box>
  );
};

export default MainContent;
