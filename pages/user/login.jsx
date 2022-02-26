import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Spacer from "../../components/Atoms/Spacer";

export default function Login() {
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
            bgcolor: "common.white",
            px: 12,
            pt: 6,
            pb: 8,
            borderRadius: "16px",
          }}
        >
          <Spacer height={16} />
          <FormControl>
            {/* autoComplete="email"を追加する */}
            <TextField label="Email" type="email" color="primary" />
            <Spacer height={16} />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              color="primary"
            />
            <Spacer height={24} />
            {/* type="submit"を追加する */}
            <Button color="success" variant="contained">
              ログイン
            </Button>
          </FormControl>
        </Paper>
      </Box>
    </Box>
  );
}
