export default function Login() {
  return (
    <div className="">
      <main className="main">
        <div className="content">
          <div className="title">SHIRAVEL</div>
          <form className="form">
            <ul>
              <li>
                <span className="inputTitle">MALL</span>
                <input type="email" name="email" className="email" required />
              </li>
              <li>
                <span className="inputTitle">PASS</span>
                <input
                  type="password"
                  name="password"
                  className="password"
                  required
                  minLength={8}
                />
              </li>
            </ul>
            <button type="submit" className="login">
              ログイン
            </button>
          </form>
        </div>
      </main>
      <style jsx>{`
        main {
          height: 800px;
          width: auto;
          //   background: #180e3b;
          background: -webkit-linear-gradient(30deg, #180e3b, black);
        }
        .title {
          color: #acb6e5; //非対応のブラウザでの文字色を設定
          background: -webkit-linear-gradient(
            0deg,
            #acb6e5,
            #86fde8
          ); //背景色にグラデーションを指定
          -webkit-background-clip: text; //テキストでくり抜く
          -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
          font-size: 80px;
          font-family: "Arial Black";
        }
        .content {
          width: 450px;
          height: 150px;
          top: 250px;
          bottom: 0;
          left: 30%;
          right: 0;
          position: absolute;
        }
        .form {
          margin-top: 50px;
          margin-left: 50px;
        }

        li {
          list-style: none;
          margin: 5px 0px;
        }

        input {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
          font-size: 20px;
        }

        .inputTitle {
          color: #fff;
          font-size: 14px;
          font-family: "Arial";
          margin-right: 20px;
        }

        button:hover {
          opacity: 0.6;
        }

        .login {
          color: #fff;
          background: #f56500;
          height: 30px;
          font-size: 14px;
          position: absolute;
          right: 10px;
          border-radius: 100vh;
        }
      `}</style>
    </div>
  );
}
