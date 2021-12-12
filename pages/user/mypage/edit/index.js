export default () => {
  let buttonAlert = () => {
    alert("Clicked!");
  };

  return (
    <div>
      <div className="frame">
        <h2 className="title">プロフィール設定</h2>
        <div className="flex">
          <div className="item-place user-space">ユーザー名</div>
          <input
            className="input-padding input-place"
            value="テキストテキスト"
            disabled
          />
        </div>
        <div className="flex">
          <div className="item-place mail-space">メールアドレス</div>
          <input className="input-padding" value="テキストテキスト" disabled />
        </div>
        <div className="flex">
          <div className="item-place">アイコンを画像変更する</div>
          <img src="" alt="あああ" className="input-padding" />
          <input type="file" className="input-padding" />
        </div>
        <div className="flex">
          <div className="item-place introduction-space">自己紹介</div>
          <textarea className="input-padding textarea-size" />
        </div>
        <div className="flex">
          <button type="submit" className="submit-btn" onClick={() => {buttonAlert()}}>
            保存する
          </button>
        </div>
      </div>
      <style jsx>{`
        .frame {
          border: solid 2px black;
          margin: 7rem 3rem;
          padding: 2rem;
        }
        .title {
          font-size: 1.5rem;
        }
        .flex {
          display: flex;
          margin: 2rem;
        }
        .item-place {
          padding: 1rem;
        }
        .user-space {
          margin-right: 7rem;
        }
        .mail-space {
          margin-right: 5rem;
        }
        .input-padding {
          padding: 1rem;
        }
        input[type="file"] {
          color: transparent;
        }
        .textarea-size {
          resize: none;
          width: 25rem;
          margin-left: 8rem;
        }
        .submit-btn {
          cursor: pointer;
          margin: 0 auto;
          color: #000;
          border-top: 4px solid #d8dcdc;
          border-right: 4px solid #666;
          border-bottom: 4px solid #333;
          border-left: 4px solid #868888;
          border-radius: 0;
          background-image: -webkit-linear-gradient(
            135deg,
            #333 0%,
            #868888 20%,
            #d8dcdc 34%,
            white 53%,
            #666 100%
          );
          background-image: linear-gradient(
            -45deg,
            #333 0%,
            #868888 20%,
            #d8dcdc 34%,
            white 53%,
            #666 100%
          );
          text-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff,
            0 0 5px #fff;
        }

        .submit-btn:hover {
          text-shadow: 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff,
            0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff, 0 0 7px #fff;
        }
      `}</style>
    </div>
  );
};
