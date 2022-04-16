import { Avatar, Box, Typography } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import SolidBorderLine from "../Atoms/SolidBorderline";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";


const MainContent = (props) => {

  return (
    <Box>
      <Spacer height={30} />
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{
          color: "#cf8807",
          textShadow: "2px 0 #9ba0ab",
        }}
      >
        {props.title}
      </Typography>
      <SolidBorderLine />
      <Spacer height={100} />
      <Box sx={{ px: 2 }}>
        <ReactMarkdown className={"markdown-body"} remarkPlugins={[gfm]}>
          {props.content}
        </ReactMarkdown>
      </Box>
      <Spacer height={100} />
    </Box>
  );
};

export default MainContent;
