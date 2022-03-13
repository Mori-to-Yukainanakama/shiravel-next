import { createContext, useState } from "react";

export const CreateQuestionContext = createContext({});

export function CreateQuestionProvider(props) {
  const [title, setTitle] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  return (
    <CreateQuestionContext.Provider
      value={{ markdownValue, setMarkdownValue, title, setTitle }}
    >
      {props.children}
    </CreateQuestionContext.Provider>
  );
}
