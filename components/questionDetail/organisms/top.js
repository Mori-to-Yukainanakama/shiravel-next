import { Box, Container, Typography } from "@mui/material";

const Top = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.dark",
          p: 4,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ color: "common.white", p: 2 }}>
            How developers code is here.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "common.white", p: 2 }}>
            Shiravelは、エンジニアに関する知識を記録・共有するためのサービスです。
            <br />
            コードを書いていて気づいたことや、自分がハマったあの仕様について、他のエンジニアと知見を共有しましょう！
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Top;
