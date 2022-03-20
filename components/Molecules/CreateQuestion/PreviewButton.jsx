import { useContext } from "react";
import ExecuteButton from "/components/Atoms/ExecuteButton";
// プロバイダー
import { CreateQuestionContext } from "/providers/CreateQuestionProvider";

function PreviewButton(props) {
  const { setPreviewState } = useContext(CreateQuestionContext);

  return (
    <ExecuteButton action={() => setPreviewState(true)} margin={"0.5rem 1rem"}>
      {props.children}
    </ExecuteButton>
  );
}

export default PreviewButton;
