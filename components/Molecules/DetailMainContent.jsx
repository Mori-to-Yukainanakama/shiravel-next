import { Avatar, Box, Typography } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import moment from "moment";
import SolidBorderLine from "../Atoms/SolidBorderline";


const MainContent = ({ isAnswered = false, content, answerCreatedAt, answerUserName, title }) => {


  const Date = (date) => {
    return moment(date).format('YYYY-MM-DD');
  };

  return (
    <Box>
      <Spacer height={24} />
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{
          color: "#cf8807",
          textShadow: "2px 0 #9ba0ab",
        }}
      >
        {title}
      </Typography>
      <SolidBorderLine />
      <Spacer height={24} />
      <Box sx={{ px: 2 }}>
        {content}
        {isAnswered && (
          <>
            <Spacer height={12} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">
                {/* 投稿日 */}
                {Date(answerCreatedAt)}
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
                {answerUserName}
              </Avatar>
            </Box>
          </>
        )}
      </Box>
      <Spacer height={24} />
      <Borderline />
    </Box>
  );
};

export default MainContent;
