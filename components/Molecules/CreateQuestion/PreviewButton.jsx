import { useContext, useEffect } from "react";
import ExecuteButton from "/components/Atoms/ExecuteButton";
// プロバイダー
import { CommonContext } from "@/providers/CommonProvider";

export function PreviewButton(props) {
  const { setPreviewState } = useContext(CommonContext);

  return (
    <ExecuteButton action={() => setPreviewState(true)} margin={"0.5rem 1rem"}>
      {props.children}
    </ExecuteButton>
  );
}
