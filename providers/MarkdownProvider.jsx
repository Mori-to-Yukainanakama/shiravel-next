import { createContext, useState } from "react";

export const MarkdownContext = createContext({});

export function MarkdownProvider(props) {
  const [markdownValue, setMarkdownValue] = useState("");

  return (
    <MarkdownContext.Provider value={{ markdownValue, setMarkdownValue }}>
      {props.children}
    </MarkdownContext.Provider>
  );
}
