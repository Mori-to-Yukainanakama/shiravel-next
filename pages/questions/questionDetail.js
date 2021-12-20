import {
  Avatar,
  Box,
  Chip,
  Container,
  createTheme,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Spacer from "../../components/spacer";

// const center_center = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const center_left = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// };

// const theme = createTheme();

const QuestionDetail = () => {
  return (
    <>
      {/* Top */}
      <Box
        sx={{
          bgcolor: "black",
          p: 4,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", p: 1 }}>
          Ask Whatever You Want To Know!
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "white", p: 1 }}>
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
                  <Grid item xs={9} sx={{ p: 4 }}>
                    <Typography fontSize={8}>2021/12/25 12:25</Typography>
                    <Spacer height={8} />
                    <Typography variant="h5">
                      Question Title Question Title Question Title Question
                      Title
                    </Typography>
                    <Spacer height={12} />
                    <Stack direction="row" spacing={1}>
                      <Chip label="回答済" size="small" color="primary" />
                      <Chip label="未解決" size="small" color="error" />
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ width: 36, height: 36, bgcolor: deepPurple[500] }}
                    >
                      K
                    </Avatar>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Heading end */}

            {/* Main */}
            <Grid item xs={9}>
              <Paper elevation={4} sx={{ bgcolor: "white", px: 8, py: 6 }}>
                {/* Question */}
                <Box>
                  <h3>Question Heading</h3>
                  <hr />
                  <Box sx={{ pl: 2 }}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                  </Box>
                </Box>
                <hr />
                {/* Question end */}

                <Spacer height={12}></Spacer>

                {/* Question Comment */}
                <Box sx={{ width: "90%", ml: "auto" }}>
                  <h3>Question Comment</h3>
                  <hr />
                  <Box sx={{ width: "98%", ml: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 24,
                          height: 24,
                          bgcolor: deepOrange[500],
                          fontSize: ".8rem",
                        }}
                      >
                        M
                      </Avatar>
                      <Spacer width={8} />
                      <p>Moony</p>
                      <Spacer width={12} />
                      <Typography fontSize={8}>2021/12/25 12:25</Typography>
                    </Box>
                    <Box sx={{ pl: 6, pt: 1 }}>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                    </Box>
                  </Box>
                  <Spacer height={24}></Spacer>
                  <Box sx={{ width: "98%", ml: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 24,
                          height: 24,
                          bgcolor: deepPurple[500],
                          fontSize: ".8rem",
                        }}
                      >
                        K
                      </Avatar>
                      <Spacer width={8} />
                      <p>Kile</p>
                      <Spacer width={12} />
                      <Typography fontSize={8}>2021/12/25 12:25</Typography>
                    </Box>
                    <Box sx={{ pl: 6, pt: 1 }}>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                    </Box>
                  </Box>
                </Box>
                {/* Question Comment end */}

                <Spacer height={40}></Spacer>

                {/* Answer */}
                <Box>
                  <h3>Answer Heading</h3>
                  <hr />
                  <Box sx={{ pl: 2 }}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, labore.
                    </p>
                  </Box>
                </Box>
                <hr />
                {/* Answer end */}
                <Spacer height={12}></Spacer>

                {/* Answer Comment */}
                <Box sx={{ width: "90%", ml: "auto" }}>
                  <h3>Answer Comment</h3>
                  <hr />
                  <Box sx={{ width: "98%", ml: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 24,
                          height: 24,
                          bgcolor: deepPurple[500],
                          fontSize: ".8rem",
                        }}
                      >
                        K
                      </Avatar>
                      <Spacer width={8} />
                      <p>Kile</p>
                      <Spacer width={12} />
                      <Typography fontSize={8}>2021/12/25 12:25</Typography>
                    </Box>
                    <Box sx={{ pl: 6, pt: 1 }}>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                    </Box>
                  </Box>
                  <Spacer height={24}></Spacer>
                  <Box sx={{ width: "98%", ml: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 24,
                          height: 24,
                          bgcolor: deepOrange[500],
                          fontSize: ".8rem",
                        }}
                      >
                        M
                      </Avatar>
                      <Spacer width={8} />
                      <p>Moony</p>
                      <Spacer width={12} />
                      <Typography fontSize={8}>2021/12/25 12:25</Typography>
                    </Box>
                    <Box sx={{ pl: 6, pt: 1 }}>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                      <p>
                        Nobis mollitia reprehenderit vero eius, dolorum vel
                        provident.
                      </p>
                    </Box>
                  </Box>
                </Box>
                {/* Answer Comment end */}

                {/* Editor */}
                <Box></Box>
                {/* Editor end */}
              </Paper>
            </Grid>
            {/* Main end */}

            {/* Sidebar */}
            <Grid item xs={3}>
              <Paper elevation={4} sx={{ bgcolor: "white", height: 400, p: 3 }}>
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
