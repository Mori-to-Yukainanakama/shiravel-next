import axios from "@/libs/axios";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { AuthContext } from "@/providers/AuthProvider";
import { CommonProvider } from "@/providers/CommonProvider";

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

function AppInit() {
  const router = useRouter();
  const { setUserCurrent } = useContext(AuthContext);

  useEffect(() => {
    // ログイン画面はAPIを叩かない
    if (router.pathname.includes("login")) return false;

    axios
      .get("/api/v1/users/getUser")
      .then((res) => {
        setUserCurrent(res.data);
      })
      .catch((e) => {
        router.replace("/user/login");
      });
  }, [router.pathname]);

  return null;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  if (pathname == "/user/login") {
    return (
      <ThemeProvider theme={theme}>
        <CommonProvider>
          <Component {...pageProps} />
          <AppInit />
        </CommonProvider>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CommonProvider>
          <Layout>
            <Component {...pageProps} />
            <AppInit />
          </Layout>
        </CommonProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
