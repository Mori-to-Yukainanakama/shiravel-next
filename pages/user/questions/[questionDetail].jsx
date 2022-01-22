import { Box, Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Heading from "../../../components/QuestionDetail/Organisms/Heading";
import Main from "../../../components/QuestionDetail/Organisms/Main";
import Spacer from "../../../components/QuestionDetail/Atoms/Spacer";
import Top from "../../../components/QuestionDetail/Organisms/Top";
import Editor from "../../../components/QuestionDetail/Molecules/Editor";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A148C",
      light: "#7c43bd",
      dark: "#12005e",
    },
    secondary: {
      main: "#c51162",
      light: "#fd558f",
      dark: "#8e0038",
    },
  },
});

const QuestionDetail = () => {
  return (
    <ThemeProvider theme={theme}>
      <Top />
      <Box sx={{ bgcolor: "primary.main", py: 8 }}>
        <Container>
          <Heading />
          <Spacer height={20} />
          <Main />
          <Spacer height={20} />
          <Editor />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default QuestionDetail;
