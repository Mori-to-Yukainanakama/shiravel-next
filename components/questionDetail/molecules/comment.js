import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Spacer from "../atoms/spacer";

const Comment = ({ title }) => {
  return (
    <>
      <Box sx={{ width: "90%", ml: "auto" }}>
        <h3>{title} Comment</h3>
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
            <p>Mendy</p>
            <Spacer width={12} />
            <Typography fontSize={8}>2021/12/25 12:25</Typography>
          </Box>
          <Box sx={{ pl: 6, pt: 1 }}>
            <p>
              Nobis mollitia reprehenderit vero eius, dolorum vel provident.
            </p>
            <p>
              Nobis mollitia reprehenderit vero eius, dolorum vel provident.
            </p>
            <p>
              Nobis mollitia reprehenderit vero eius, dolorum vel provident.
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
              Nobis mollitia reprehenderit vero eius, dolorum vel provident.
            </p>
            <p>
              Nobis mollitia reprehenderit vero eius, dolorum vel provident.
            </p>
            <p>
              Nobis mollitia reprehenderit vero eius, dolorum vel provident.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Comment;
