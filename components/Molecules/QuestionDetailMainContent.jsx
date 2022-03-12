import { Avatar, Box, Typography } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import moment from "moment";
import SolidBorderLine from "../Atoms/SolidBorderline";


const MainContent = (props) => {

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
        {props.title}
      </Typography>
      <SolidBorderLine />
      <Spacer height={24} />
      <Box sx={{ px: 2 }}>
        {props.content}
      </Box>
      <Spacer height={24} />
      <Borderline />
    </Box>
  );
};

export default MainContent;
