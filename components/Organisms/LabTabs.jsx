import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import ListCard from "../Molecules/ListCard";
import Spacer from "../Atoms/Spacer";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';

export default function LabTabs(props) {
  const [value, setValue] = useState("1");
  const [page, setPage] = useState(1); // ページ番号
  const [pageCount, setPageCount] = useState(); // ページ数
  const [questions, setQuestions] = useState([]);
  const displayNum = 15; //1ページあたりの項目数

  useEffect(() => {
    //ページカウントの計算（今回は3項目/ページなので4ページ）
    setPageCount(Math.ceil(props.questions.length/displayNum));
    //表示データを抽出
    setQuestions(props.questions.slice(((page - 1) * displayNum), page * displayNum));
  },[page, props]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangePage = (event, index) => {
    //ページ移動時にページ番号を更新
    setPage(index);
    //ページ移動時に表示データを書き換える
    setQuestions(questions.slice(((index - 1) * displayNum), index * displayNum))
  };

  // 新着 質問一覧取得
  const getNewArrival = () => {
    setPage(1);
    axios.get('http://localhost:8000/api/v1/questions/').then((response) => {
      setPageCount(Math.ceil(response.data.length/displayNum));
      //表示データを抽出
      setQuestions(response.data.slice(0, displayNum));
    })
  }

  // 未回答 質問一覧取得
  const getUnanswered = () => {
    setPage(1);
    axios.get('http://localhost:8000/api/v1/questions/unanswered').then((response) => {
      setPageCount(Math.ceil(response.data.length/displayNum));
      //表示データを抽出
      setQuestions(response.data.slice(0, displayNum));
    });
  }

  // 回答有 質問一覧取得
  const getAnswered = () => {
    setPage(1);
    axios.get('http://localhost:8000/api/v1/questions/answered').then((response) => {
      setPageCount(Math.ceil(response.data.length/displayNum));
      //表示データを抽出
      setQuestions(response.data.slice(0, displayNum));
    });
  }

  // 未解決 質問一覧取得
  const getUnsolved = () => {
    setPage(1);
    axios.get('http://localhost:8000/api/v1/questions/unsolved').then((response) => {
      setPageCount(Math.ceil(response.data.length/displayNum));
      //表示データを抽出
      setQuestions(response.data.slice(0, displayNum));
    });
  }

  // 解決済 質問一覧取得
  const getSolved = () => {
    setPage(1);
    axios.get('http://localhost:8000/api/v1/questions/solved').then((response) => {
      setPageCount(Math.ceil(response.data.length/displayNum));
      //表示データを抽出
      setQuestions(response.data.slice(0, page * displayNum));
    });
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: {
              height: '3px'
            }
          }}
        >
          <Tab label="新着" value="1" onClick={getNewArrival} />
          <Tab label="未回答" value="2" onClick={getUnanswered} />
          <Tab label="回答済み" value="3" onClick={getAnswered} />
          <Tab label="未解決" value="4" onClick={getUnsolved} />
          <Tab label="解決済み" value="5" onClick={getSolved} />
        </Tabs>
        <Spacer whidth={"20px"} height={"20px"} />
        <TabPanel value="1">
          {questions.map((question, index) => {
            return <ListCard question={question} key={index} />
          })};
        </TabPanel>
        <TabPanel value="2">
          {questions.map((question, index) => {
            return <ListCard question={question} key={index} />
          })};
        </TabPanel>
        <TabPanel value="3">
          {questions.map((question, index) => {
            return <ListCard question={question} key={index} />
          })};
        </TabPanel>
        <TabPanel value="4">
          {questions.map((question, index) => {
            return <ListCard question={question} key={index} />
          })};
        </TabPanel>
        <TabPanel value="5">
          {questions.map((question, index) => {
            return <ListCard question={question} key={index} />
          })};
        </TabPanel>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination count={pageCount} page={page} color="secondary" onChange={handleChangePage} />
        </Box>
      </TabContext>
    </Box>
  );
}
