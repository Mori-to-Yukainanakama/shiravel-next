import { Box, Container } from "@mui/material";
import Heading from "../../../components/Organisms/Heading";
import DetailMain from "../../../components/Organisms/DetailMain";
import Spacer from "../../../components/Atoms/Spacer";
import Editor from "../../../components/Molecules/Editor";

const QuestionDetail = () => {
  return (

      <Box sx={{ bgcolor: "primary.main", py: 8 }}>
        <Container>
          <Heading />
          <Spacer height={20} />
          <DetailMain />
          <Spacer height={20} />
          <Editor />
        </Container>
      </Box>
  );
};

export default QuestionDetail;
