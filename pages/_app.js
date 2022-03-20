import { createTheme, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { pathname } = router;

  if (pathname == "/user/login") {
    return (
      <ThemeProvider theme={theme}>
        <CommonProvider>
          <Component {...pageProps} />
        </CommonProvider>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CommonProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CommonProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
