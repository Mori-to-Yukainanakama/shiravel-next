import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Spacer from "../Atoms/Spacer";

// 表示件数
const LIST_COUNT = 20;

const cardStyle = {
  minWidth: 275,
  backgroundColor: "common.white",
  borderRadius: "10px",
  border: 2,
  borderColor: "secondary.main",
  padding: "30px",
  "&:hover": {
    backgroundColor: "#cf8807",
    opacity: [0.9, 0.8, 0.7],
  },
};

export default function ListCard(props) {

  return (
    <>
    <Link href={`/user/questions/${props.question.question_id}`} passHref>
      <CardContent sx={cardStyle}>
        <Typography
          variant="button"
          component="div"
          sx={{fontSize: "40px"}}
        >
          {props.question.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="string"
            component="span"
            sx={{px:10}}
          >
            {props.question.user.name}
          </Typography>
          <Typography
            variant="string"
            component="span"
          >
            投稿日：{props.question.created_at}
          </Typography>
        </Box>
      </CardContent>
      </Link>
      <Spacer width={100} height={20} />
    </>
  )
}
