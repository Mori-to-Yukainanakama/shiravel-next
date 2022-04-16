import { useContext, useEffect } from "react";
import ExecuteButton from "/components/Atoms/ExecuteButton";
// プロバイダー
import { CreateContext } from "/providers/CreateProvider";

export function PreviewButton(props) {
  const { setPreviewState } = useContext(CreateContext);

  return (
    <ExecuteButton action={() => setPreviewState(true)} margin={"0.5rem 1rem"}>
      {props.children}
    </ExecuteButton>
  );
}
