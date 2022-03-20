import axios from "axios";
import { useContext, useEffect } from "react";

import ExecuteButton from "/components/Atoms/ExecuteButton";
// プロバイダー
import { CommonContext } from "/providers/CommonProvider";
import { CreateQuestionContext } from "/providers/CreateQuestionProvider";

function PostQuestionButton(props) {
  const { baseUrl } = useContext(CommonContext);
  const { title, markdownValue } = useContext(CreateQuestionContext);

  /**
   * 質問の投稿
   */
  function createQuestion() {
    const data = {
      // user_id: props.id,
      title: title,
      content: markdownValue,
    };

    axios
      .post("http://localhost:8000/api/v1/create/questions", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <ExecuteButton action={createQuestion} margin={"0.5rem 1rem"}>
        {props.text}
      </ExecuteButton>

      <style jsx>{`
        .btn-area {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default PostQuestionButton;
