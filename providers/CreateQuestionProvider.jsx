import { createContext, useState } from "react";

export const CreateQuestionContext = createContext({});

export function CreateQuestionProvider(props) {
  const [isPreview, setPreviewState] = useState(false);

  return (
    <CreateQuestionContext.Provider
      value={{
        isPreview,
        setPreviewState,
      }}
    >
      {props.children}
    </CreateQuestionContext.Provider>
  );
}
