import { FcGenericSortingDesc } from "react-icons/fc"
import { IconContext } from "react-icons/lib";
import { UserName } from "./UserName.js";

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
                        padding-left: 50px;
                        background-color: #55fffd;
                    }

                    .question__body--box {
                        height: 700px;
                        padding: 50px;
                        overflow: auto;
                    }

                    .question__body--text {
                        padding-top: 50px;
                    }

                    .question__body--text span {
                        font-size: 20px;
                        font-weight: bold;
                        border-bottom: solid 1px #4e524e;
                    }

                    .question__answer {
                        background-color: #92db8a;
                    }

                    .question__answer--box {
                        padding: 50px;
                        width: 100%;
                    }

                    .question__answer--head {
                        padding: 0 50px;
                        border-bottom: solid 1px #4e524e;
                        display: flex;
                        justify-content: flex-end;
                    }

                    .question__answer--heading {
                        font-size: 30px;
                        margin-right: auto;
                        margin-left: 20px;
                    }

                    .question__answer--sort {
                        margin-right: 30px;
                    }

                    .question__answer--body {
                        width: 80%;
                        margin: 0 auto;
                        border-bottom: 1px solid #4e524e;
                        padding: 50px;
                    }

                    .question__answer--user {
                        height: 30px;
                        font-size: 14px;
                        display: flex;
                        justify-content: flex-end;
                        padding: 30px;
                        line-height: 30px;
                    }

                    .question__answer--text {
                        padding: 30px;
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
                <div className="question__body--box">
                    <p className="question__body--text">
                        <span>Next.jsが難しいですうううう</span><br />
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
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
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
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
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttext
                        exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                    </p>
                </div>
            </div>
            <div className="question__answer">
                <div className="question__answer--box">
                    <div className="question__answer--head">
                        <span className="question__answer--heading">回答：3件</span>
                        <IconContext.Provider value={{ size: '20px' }}>
                            <FcGenericSortingDesc />
                            <span className="question__answer--sort">新しい順</span>
                            <FcGenericSortingDesc />
                            <span>古い順</span>
                        </IconContext.Provider>
                    </div>
                    {[1,2,3].map((key, value) =>
                    <div className="question__answer--body" key={key}>
                        <div className="question__answer--text">
                            <span>
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                                回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                            </span>
                        </div>
                        <div className="question__answer--user">
                            <span>投稿 2021/12/18</span>
                            <UserName width="30px" height="30px" radius="30px" />
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}