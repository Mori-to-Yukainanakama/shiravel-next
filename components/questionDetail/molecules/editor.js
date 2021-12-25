import React, { useCallback, useState } from "react";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { Box, Button, Paper } from "@mui/material";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const Editor = () => {
  const [value, setValue] = useState("Initial value");

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <Paper sx={{ px: 6, py: 6 }}>
      <SimpleMDE
        value={value}
        onChange={onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" size="large">
          回答する
        </Button>
      </Box>
    </Paper>
  );
};

export default Editor;
