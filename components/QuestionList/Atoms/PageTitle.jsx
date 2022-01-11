import Typography from "@mui/material/Typography";

export default function PageTitle(props) {
  return (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      sx={{
        color: "#cf8807",
        textShadow: "2px 0 #9ba0ab",
      }}
    >
      {props.title}
    </Typography>
  );
}
