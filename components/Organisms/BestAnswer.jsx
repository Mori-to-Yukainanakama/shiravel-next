import { Avatar, Box, Typography, Fab } from "@mui/material";
import Borderline from "../Atoms/Borderline";
import Spacer from "../Atoms/Spacer";
import Button from '@mui/material/Button';
import axios from "axios";
import { useState } from "react";
import Modal from '@mui/material/Modal';

const BestAnswer = (props) => {

    const style = {
        top: '50%',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function createBestAnswer() {

        const data = {};

        switch (props.type) {
            case "answer":
                data = {
                    question_id : props.questionId,
                    answer_id : props.createId,
                }
                break;
            case "answerComment":
                data = {
                    question_id : props.questionId,
                    answer_comment_id : props.createId,
                }
                break;
            case "questionComment":
                data = {
                    question_id : props.questionId,
                    question_comment_id : props.createId,
                }
                break;
        }

        axios.post('http://localhost:8000/api/v1/bestAnswer', data,{
            withCredentials: true,
        }).then((res) => {
        }).catch((err) => {
            console.log(err.data);
        });

        console.log("登録完了");
        handleClose();
    }

    return (
        <Box>
            {/* ベストアンサーボタン */}
            <Button variant="contained" onClick={handleOpen}>
                ベストアンサー登録
            </Button>

            {/* ベストアンサーモーダル */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        一度登録したら取り消せませんが。。。。。
                        本当にベストアンサーを登録しますか？
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}} >
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Button variant="contained" onClick={handleClose}>
                                取消
                            </Button>
                            <Button variant="contained" sx={{mx:3}} onClick={() => createBestAnswer()}>
                                登録
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );

};

export default BestAnswer;