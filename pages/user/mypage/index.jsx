import Title from "../../../components/MyPage/Title";
import axios from "axios";

export default function MyPage() {
  //取得API
  function example() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("取得に成功しました");
        console.log(res);
      })
      .catch((e) => {
        console.log("取得に失敗しました");
        console.log(e);
      });
  }

  return (
    <div className="background">
      <div className="frame">
        <div className="fixed-items">
          <div className="move-right border-frame">質問</div>
          <div className="move-right border-frame">履歴</div>
          <div className="border-frame" onClick={example}>
            お気に入り
          </div>
        </div>
        <h3 className="question-number">質問番号</h3>
        <Title title="コンポーネント" />
        <p className="content">質問内容</p>
        <h3 className="question-number">質問番号</h3>
        <h4 className="title">タイトル</h4>
        <p className="content">質問内容</p>
      </div>
      <style jsx>{`
        .frame {
          border: solid 2px black;
          margin: 7rem 3rem;
          position: relative;
        }
        .fixed-items {
          position: absolute;
          display: flex;
          top: -3.3rem;
          left: -0.1rem;
        }
        .border-frame {
          border: solid 2px black;
          padding: 1rem;
        }
        .move-right {
          margin-right: 2rem;
        }
        .question-number {
          margin: 2rem;
        }
        .title {
          margin: 1rem;
          text-align: center;
        }
        .content {
          margin: 2rem;
          text-align: center;
        }
        .background {
          background-image: url("https://source.unsplash.com/random/2400x2400");
        }
      `}</style>
    </div>
  );
};
