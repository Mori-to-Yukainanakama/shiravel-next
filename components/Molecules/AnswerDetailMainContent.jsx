import { Avatar, Box, Typography, Fab } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import SolidBorderLine from "../Atoms/SolidBorderline";
import Spacer from "../Atoms/Spacer";
import BestAnswer from "../Organisms/BestAnswer";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const AnswerDetailMainContent = (props) => {

  return (
    <Box>
      <Box sx={{ px: 2 }}>
        <ReactMarkdown className={"markdown-body"} remarkPlugins={[gfm]}>
          {props.content}
        </ReactMarkdown>
        <Spacer height={50} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon />
          <Spacer width={12} />
          <Typography variant="string">
            {props.answerUserName}
          </Typography>
          <Spacer width={30} />
          <Typography variant="caption">
            {props.answerCreatedAt}
          </Typography>
          <Spacer width={50} />
          <BestAnswer questionId={props.questionId} type={"answer"} createId={props.answerId} />
          <Spacer width={24} />
        </Box>
      </Box>
      <Spacer height={100} />
    </Box>
  );
};

export default AnswerDetailMainContent;
