import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { CommonProvider } from "../providers/CommonProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#180e3b",
      light: "#433466",
      dark: "#000017",
    },
    secondary: {
      main: "#ffa435",
      light: "#ffd566",
      dark: "#c77500",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <CommonProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CommonProvider>
  );
}

export default MyApp;
