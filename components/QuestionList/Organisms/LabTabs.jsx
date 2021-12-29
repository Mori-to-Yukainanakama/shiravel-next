import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListCard from "../Molecules/ListCard";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    minWidth: "20%",
    borderBottom: "solid",
    backgroundColor: "#9ba0ab",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    "&:hover": {
      backgroundColor: "#cf8807",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="新着" value="1" sx={tabStyle} />
          <Tab label="未回答" value="2" sx={tabStyle} />
          <Tab label="回答済み" value="3" sx={tabStyle} />
          <Tab label="未解決" value="4" sx={tabStyle} />
          <Tab label="解決済み" value="5" sx={tabStyle} />
        </TabList>
        <Box sx={{ borderBottom: 1, backgroundColor: "#9ba0ab" }}>
          <TabPanel value="1">
            <ListCard label={"新着"} />
          </TabPanel>
          <TabPanel value="2">
            <ListCard label={"未回答"} />
          </TabPanel>
          <TabPanel value="3">
            <ListCard label={"回答済み"} />
          </TabPanel>
          <TabPanel value="4">
            <ListCard label={"未解決"} />
          </TabPanel>
          <TabPanel value="5">
            <ListCard label={"解決済み"} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
