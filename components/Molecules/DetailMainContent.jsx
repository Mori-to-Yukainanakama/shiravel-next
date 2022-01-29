import { Avatar, Box, Typography } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";

const MainContent = ({ title, isAnswer = false }) => {
  return (
    <Box>
      <Typography variant="h5">{title} Heading</Typography>
      <Spacer height={12} />
      <Borderline />
      <Spacer height={24} />
      <Box sx={{ px: 2 }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          sunt quidem, sed sit quasi? Consequatur, odio debitis eveniet quam et,
          dignissimos dolore, rem omnis necessitatibus eum reiciendis doloribus
          architecto!
        </p>
        {isAnswer && (
          <>
            <Spacer height={12} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">
                投稿日：2021/12/25 12:25
              </Typography>
              <Spacer width={16} />
              <Typography variant="caption">
                更新日：2021/12/27 12:25
              </Typography>
              <Spacer width={24} />
              <Avatar
                variant="rounded"
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "primary.main",
                  fontSize: "1.1rem",
                }}
              >
                K
              </Avatar>
            </Box>
          </>
        )}
      </Box>
      <Spacer height={24} />
      <Borderline />
    </Box>
  );
};

export default MainContent;
