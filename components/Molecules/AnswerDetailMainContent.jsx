import { Avatar, Box, Typography, Fab } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import Button from '@mui/material/Button';
import axios from "axios";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import BestAnswer from "../Organisms/BestAnswer";


const AnswerDetailMainContent = (props) => {

  return (
    <Box>
      <Box sx={{ px: 2 }}>
        {props.content}
        <Spacer height={12} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <BestAnswer questionId={props.questionId} type={"answer"} createId={props.answerId} />
          <Spacer width={24} />
          <Typography variant="caption">
            {props.answerCreatedAt}
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
            {props.answerUserName}
          </Avatar>
        </Box>
      </Box>
      <Spacer height={24} />
      <Borderline />
    </Box>
  );
};

export default AnswerDetailMainContent;
