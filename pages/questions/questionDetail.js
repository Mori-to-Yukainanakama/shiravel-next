import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Spacer from "../../components/spacer";

const center_center = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

// const center_left = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// };

const QuestionDetail = () => {
  return (
    <>
      {/* Top */}
      <Box
        sx={{
          height: 200,
          bgcolor: "black",
          ...center_center,
        }}
      >
        <Typography variant="h3" component="h3" sx={{ color: "white", p: 1 }}>
          Ask Whatever You Want To Know!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ color: "white", p: 1 }}
        >
          知りたいことはなんでも聞け！
        </Typography>
      </Box>
      {/* Top end */}

      <Box sx={{ bgcolor: "orange", py: 4 }}>
        <Container>
          <Grid container spacing={2}>
            {/* Heading */}
            <Grid item xs={12}>
              <Paper elevation={4} sx={{ bgcolor: "white" }}>
                <Grid container>
                  <Grid item xs={9} sx={{ p: 3 }}>
                    <Typography fontSize={8}>
                      投稿日：2021年12月25日 12時25分
                    </Typography>
                    <Spacer height={8} />
                    <Typography variant="h5" component="h5">
                      Flaskにおける変数展開の使用方法
                    </Typography>
                    <Spacer height={12} />
                    <Stack direction="row" spacing={1}>
                      <Chip label="回答済" size="small" color="primary" />
                      <Chip label="未解決" size="small" color="error" />
                    </Stack>
                  </Grid>
                  <Grid item xs={3} sx={{ p: 3, ...center_center }}>
                  <Chip avatar={<Avatar>K</Avatar>} label="Kohei" color="secondary"/>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Heading end */}

            {/* Main */}
            <Grid item xs={9}>
              <Paper elevation={4} sx={{ bgcolor: "white", height: 400, p: 2 }}>
                <Box>Main</Box>
              </Paper>
            </Grid>
            {/* Main end */}

            {/* Sidebar */}
            <Grid item xs={3}>
              <Paper elevation={4} sx={{ bgcolor: "white", height: 400, p: 2 }}>
                <Box>Sidebar</Box>
              </Paper>
            </Grid>
            {/* Sidebar end */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default QuestionDetail;
