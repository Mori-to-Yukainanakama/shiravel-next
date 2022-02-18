import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: "primary.dark",
          p: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "common.white" }}>
          ©Shiravel
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
