
export default function question() {
    return (
        <div>
            <style jsx>
                {`
                    .question__meta {
                        width: 100%;
                        height: 500px;
                        background-color: yellow;
                    }

                    .question__status {
                        display: flex;
                    }

                    .question__status--list {
                        margin: 10px 50px;
                    }

                    .question__status--list:last-child {
                        margin-left: auto;
                    }

                    .question__title {
                        padding: 50px 30px;
                    }

                    .question__title--text {
                        font-size: 60px;
                        font-weight: bold;
                    }

                    .question__user {
                        display: flex;
                        justify-content: flex-end;
                        margin-right: 30px;
                    }
                `}
            </style>
            <h1>質問詳細画面</h1>
            <div className="question__meta">
                <div className="question__status">
                    <span className="question__status--list">解決済み</span>
                    <span className="question__status--list">回答件数：3件</span>
                    <span className="question__status--list">質問日：2021/12/25</span>
                </div>
                <div className="question__title">
                    <span className="question__title--text">Next.jsが難しい件について・・</span>
                </div>
                <div className="question__user">
                    <span className="question__user--name">投稿者：モリモリ</span>
                </div>
            </div>
        </div>
    );
}