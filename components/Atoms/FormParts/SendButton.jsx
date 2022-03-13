import axios from "axios";
import { useContext, useMemo, useState } from "react";

import { CommonContext } from "/providers/CommonProvider";
import ExecuteButton from "/components/Atoms/ExecuteButton";

function SendButton(props) {
  const { baseUrl } = useContext(CommonContext);

  const [sendState, setSendState] = useState(false);

  function createQuestion() {
    const data = {
      user_id: props.id,
      title: props.title,
      content: props.content,
    };

    axios
      .post(baseUrl + "/api/v1/create/questions", data)
      .then((res) => {
        console.log(res);
        console.log("投稿しました");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const createQuestionMemo = useMemo(() => createQuestion(), []);

  return (
    <>
      <div className="btn-area">
        <ExecuteButton action={() => setSendState(true)} margin={"0.5rem 1rem"}>
          {props.text}
        </ExecuteButton>
      </div>

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

export default SendButton;
