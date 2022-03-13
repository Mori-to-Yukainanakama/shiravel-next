import { createContext, useState } from "react";

export const MarkdownContext = createContext({});

export function MarkdownProvider(props) {
  const [markdownValue, setMarkdownValue] = useState("");
  const [markdownTitle, setMarkdownTitle] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  return (
    <MarkdownContext.Provider value={{ markdownValue, setMarkdownValue }}>
      {props.children}
    </MarkdownContext.Provider>
  );
}
