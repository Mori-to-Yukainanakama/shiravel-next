import Editor from "../../../components/Molecules/Editor";
import ExecuteButton from "../../../components/Atoms/ExecuteButton";

import { MarkdownProvider } from "../../../providers/MarkdownProvider";

export default function create() {
  return (
    <MarkdownProvider>
      <Editor />
      <ExecuteButton>送信</ExecuteButton>
    </MarkdownProvider>
  );
}
