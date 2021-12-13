
export default function question() {
    return (
        <div>
            <style jsx>
                {`
                    .question__meta {
                        width: 100%;
                        height: 200px;
                        background-color: yellow;
                        padding: 30px;
                        display: flex;
                    }

                    .question__meta--left {
                        width: 60%;
                    }

                    .question__meta--right {
                        width: 40%;
                    }

                    .question__status {
                        display: flex;
                        align-items: flex-end;
                        padding: 30px 0;
                    }

                    .question__status--list {
                        margin: 0px 50px;
                    }

                    .question__title {
                        padding: 30px 50px 0 50px;
                    }

                    .question__title--text {
                        font-size: 50px;
                        font-weight: bold;
                        border-bottom: 1px solid black;
                    }

                    .question__user {
                        padding: 50px;
                        margin-left: 50px;
                        display: flex;
                    }

                    .question__user--name {
                        margin: 20px;
                        font-size: 24px;
                    }

                    .question__user--image {
                        width: 60px;
                        height: 60px;
                        border-radius: 30px;
                    }

                    .question__body {
                        height: 1000px;
                        background-color: #55fffd;
                    }

                    .question__body--text {
                        padding: 100px;
                    }

                    .question__body--p {
                        padding-top: 50px;
                    }
                `}
            </style>
            <h1>質問詳細画面</h1>
            <div className="question__meta">
                <div className="question__meta--left">
                    <div className="question__title">
                        <span className="question__title--text">Next.jsが難しい件について・・</span>
                    </div>
                    <div className="question__status">
                        <span className="question__status--list">解決済</span>
                        <span className="question__status--list">回答3</span>
                        <span className="question__status--list">2021/12/25</span>
                    </div>
                </div>
                <div className="question__meta--right">
                    <div className="question__user">
                        <img className="question__user--image" src="/images/mori.jpeg" />
                        <span className="question__user--name">モリモリ</span>
                    </div>
                </div>
            </div>
            <div className="question__body">
                <div className="question__body--text">
                    <h2>Next.jsが難しいです。。</h2>
                    <p className="question__body--p">
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                    </p>
                </div>
            </div>
        </div>
    );
}