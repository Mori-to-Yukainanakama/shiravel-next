import { Box, Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Heading from "../../components/questionDetail/organisms/heading";
import Main from "../../components/questionDetail/organisms/main";
import Spacer from "../../components/questionDetail/atoms/spacer";
import Top from "../../components/questionDetail/organisms/top";

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
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Top />
      <Box sx={{ bgcolor: "primary.main", py: 8 }}>
        <Container>
          <Heading />
          <Spacer height={20} />
          <Main />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default QuestionDetail;
