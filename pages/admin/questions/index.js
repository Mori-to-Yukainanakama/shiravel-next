import axios from "axios";
import Link from "next/link";
// import Button from "@mui/material/Button"

export default () => {
  //   //一覧取得API
  //   function example() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         console.log("取得に成功しました");
  //         console.log(res);
  //       })
  //       .catch((e) => {
  //         console.log("取得に失敗しました");
  //         console.log(e);
  //       });
  //   }

  const datas = [
    {
      title: "タイトル",
      user: "UglyGorilla",
      answered: "回答済み",
      solved: "解決済み",
      created_at: "2011/11/11",
    },
    {
      title: "タイトル",
      user: "太郎",
      answered: "未回答",
      solved: "未解決",
      created_at: "2011/11/11",
    },
    {
      title: "タイトル",
      user: "太郎",
      answered: "未回答",
      solved: "未解決",
      created_at: "2011/11/11",
    },
    {
      title: "タイトル",
      user: "太郎",
      answered: "未回答",
      solved: "未解決",
      created_at: "2011/11/11",
    },
  ];

  return (
    <div className="screen">
      <table border="2" className="table-size">
        <thead>
          <tr>
            <th className="flex-items">タイトル</th>
            <th className="flex-items">ユーザー名</th>
            <th className="flex-items">回答ステータス</th>
            <th className="flex-items">解決ステータス</th>
            <th className="flex-items">投稿日時</th>
            <th className="flex-items"></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.title}</td>
                <td>{data.user}</td>
                <td>{data.answered}</td>
                <td>{data.solved}</td>
                <td>{data.created_at}</td>
                <td>
                  <a className="btn" href="/">
                    詳細へ
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p style={{color: 'red'}}>ページネーション追加予定</p>
      <style jsx>{`
        .screen {
          margin: 8rem 12rem;
          height: 70rem;
          color: black;
          background: url("https://source.unsplash.com/random/2400x2400");
          background-color: rgba(255, 255, 255, 0.2);
          background-blend-mode: hard-light;
        }
        .table-size {
          width: 88rem;
        }
        th {
          border-bottom: 3px black solid;
          padding-bottom: 3rem;
        }
        td {
          border-bottom: 1px black solid;
          padding: 4rem;
          text-align: center;
          vertical-align: middle;
        }
        .btn {
          background-color: #190c8d;
          color: #ffffff;
          font-size: 1.3em;
          font-weight: 600;
          position: relative;
          outline: none;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          height: 55px;
          width: 160px;
        }
      `}</style>
    </div>
  );
};
