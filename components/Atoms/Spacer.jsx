import { Box } from "@mui/material";

const Spacer = ({ width, height }) => {
  return (
    <Box
      component="span"
      sx={{ display: "block", width: width, height: height }}
    ></Box>
  );
};

export default Spacer;
