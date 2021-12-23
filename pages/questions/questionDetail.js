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
      light: "#9C27B0",
      dark: "#000000",
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
          <Spacer height={20}></Spacer>
          <Main />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default QuestionDetail;
