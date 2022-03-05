import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Spacer from "../../components/Atoms/Spacer";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    axios
      .get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      })
      .then(() => {
        axios
          .post("http://localhost:8000/login", values, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.data);
          });
      });
  };
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" color={"common.white"}>
          Shiravel
        </Typography>
        <Spacer height={24} />
        <Paper
          elevation={4}
          sx={{
            minWidth: 500,
            bgcolor: "common.white",
            px: 12,
            py: 8,
            borderRadius: "16px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField {...field} label="email" />}
                defaultValue=""
                rules={{
                  required: { value: true, message: "※必須項目です" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                    message: "※メールアドレスを正しく入力してください",
                  },
                }}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <Typography
                    variant="subtitle2"
                    color={"error"}
                    sx={{ p: 0.6 }}
                  >
                    {message}
                  </Typography>
                )}
              />
              <Spacer height={20} />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="password" />
                )}
                defaultValue=""
                rules={{
                  required: { value: true, message: "※必須項目です" },
                  // minLength: {
                  //   value: 8,
                  //   message: "※8文字以上で入力してください",
                  // },
                  // maxLength: {
                  //   value: 100,
                  //   message: "※100文字以下で入力してください",
                  // },
                  // pattern: {
                  //   value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/,
                  //   message: "※パスワードを正しく入力してください",
                  // },
                }}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <Typography
                    variant="subtitle2"
                    color={"error"}
                    sx={{ p: 0.6 }}
                  >
                    {message}
                  </Typography>
                )}
              />
              <Spacer height={24} />
              <Button
                color="success"
                type="submit"
                variant="contained"
                size="large"
              >
                ログイン
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
