import { Box, Container } from "@mui/material";
import Heading from "../../../components/QuestionDetail/Organisms/Heading";
import Main from "../../../components/QuestionDetail/Organisms/Main";
import Spacer from "../../../components/QuestionDetail/Atoms/Spacer";
import Editor from "../../../components/QuestionDetail/Molecules/Editor";

const QuestionDetail = () => {
  return (

      <Box sx={{ bgcolor: "primary.main", py: 8 }}>
        <Container>
          <Heading />
          <Spacer height={20} />
          <Main />
          <Spacer height={20} />
          <Editor />
        </Container>
      </Box>
  );
};

export default QuestionDetail;
