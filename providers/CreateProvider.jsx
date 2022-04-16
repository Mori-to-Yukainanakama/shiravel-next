import { createContext, useState } from "react";

export const CreateContext = createContext({});

export function CreateProvider(props) {
  const [isPreview, setPreviewState] = useState(false);

  return (
    <CreateContext.Provider
      value={{
        isPreview,
        setPreviewState,
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
}
