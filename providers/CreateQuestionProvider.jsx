import { createContext, useState } from "react";

export const CreateQuestionContext = createContext({});

export function CreateQuestionProvider(props) {
  const [title, setTitle] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");
  const [isPreview, setPreviewState] = useState(false);

  return (
    <CreateQuestionContext.Provider
      value={{
        markdownValue,
        setMarkdownValue,
        title,
        setTitle,
        isPreview,
        setPreviewState,
      }}
    >
      {props.children}
    </CreateQuestionContext.Provider>
  );
}
