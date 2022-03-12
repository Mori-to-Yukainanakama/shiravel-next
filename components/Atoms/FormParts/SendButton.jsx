import axios from "axios";
import { useContext, useMemo, useState } from "react";

import { CommonContext } from "../../../providers/CommonProvider";
import ExecuteButton from "/components/Atoms/ExecuteButton";

function SendButton(props) {
  const { baseUrl } = useContext(CommonContext);

  const [sendState, setSendState] = useState(false);

  function createQuestion() {
    axios
      .post(baseUrl + "")
      .then()
      .catch();
  }

  const createQuestionMemo = useMemo(() => createQuestion(), [sendState]);

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
