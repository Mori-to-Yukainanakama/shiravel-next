import { Box, Paper, Typography } from "@mui/material";

const Editor = () => {
  return (
    <Paper sx={{ px: 6, py: 6 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h4">Editor Area</Typography>
      </Box>
    </Paper>
  );
};

export default Editor;
