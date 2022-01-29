import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// 表示件数
const LIST_COUNT = 20;

const cardStyle = {
  minWidth: 275,
  borderRadius: "10px",
  margin: "15px",
  "&:hover": {
    backgroundColor: "#cf8807",
    opacity: [0.9, 0.8, 0.7],
  },
};

export default function ListCard(props) {
  return (
    <>
      <Typography variant="h4" component="div" sx={{ padding: "10px 15px 0" }}>
        {props.label}
      </Typography>
      {/* {props.data.map((index, value) => { */}
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link href={"/"}>Title</Link>
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link href={"/"}>Title</Link>
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link href={"/"}>Title</Link>
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      {/* })} */}
    </>
  );
}
