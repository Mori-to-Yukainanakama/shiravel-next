import { Box, Grid, Typography } from "@mui/material";
import BorderLine from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import CommentedUser from "./CommentedUser";
import BestAnswer from "../Organisms/BestAnswer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Comment = (props) => {

  return (
    <>
      <Box>
        <div className="speechbubble">
          <div className="userIcon">
            <Grid container direction="column" alignItems="center">
              <AccountCircleIcon />
              <Typography variant="caption">
                {props.userName}
              </Typography>
              <Typography variant="caption">
                {props.createdAt}
              </Typography>
            </Grid>
          </div>
          <div className="comment">
            <div className="content">
              {/* コメント内容 */}
              {props.content}
            </div>
          </div>
        </div>
        <Box sx={{ pl: 8, pb: 5, display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ ml: "auto" }}>
            <BestAnswer questionId={props.questionId} type={props.type} createId={props.createId} />
          </Box>
        </Box>
        <style jsx>{`
          .speechbubble {
            width: 100%;
            margin: 1.5em auto;
            overflow: hidden;
          }

          .speechbubble .userIcon {
            float: left;
            margin-right: -90px;
            width: 80px;
          }

          .speechbubble .comment {
            width: 100%;
          }

          .content {
            display: inline-block;
            position: relative;
            margin: 5px 0 0 105px;
            padding: 17px 13px;
            border-radius: 12px;
            background: #d7ebfe;
          }

          .content:after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 18px;
            left: -24px;
            border: 12px solid transparent;
            border-right: 12px solid #d7ebfe;
          }
        `}</style>
      </Box>
    </>
  );
};


export default Comment;
