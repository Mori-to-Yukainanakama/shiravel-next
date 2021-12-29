import React, { Fragment } from "react"
import { UserName } from "./userName"
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import FlagIcon from '@mui/icons-material/Flag';
import Box from '@mui/material/Box';

export const AnswerBody = () => {
    return (
        <Fragment>
            <style jsx>
                {`
                    .question__answer--body {
                        width: 80%;
                        margin: 0 auto;
                        border-bottom: 1px solid #4e524e;
                        padding: 50px;
                    }

                    .question__answer--user {
                        height: 30px;
                        font-size: 14px;
                        display: flex;
                        justify-content: flex-end;
                        padding: 30px;
                        line-height: 30px;
                    }

                    .question__answer--text {
                        padding: 30px;
                    }

                    .question__answer--date {
                        padding-right: 30px;
                    }
                `}
            </style>
            <Box sx={{ padding: "30px 50px" }}>
                <Grid container item xs={12}>
                    <span>
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                    </span>
                </Grid>
                <Grid sx={{ marginTop: "30px" }} container item xs={12} justifyContent="flex-end" alignItems="center">
                    <span className="question__answer--date">2021/12/21</span>
                    <UserName size="30px" />
                </Grid>
            </Box>
        </Fragment>
    )
}
