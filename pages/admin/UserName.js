import React, { Fragment } from "react"

export const UserName = (props) => {
    return (
        <Fragment>
            <p>{props.width}</p>
            <style jsx>
                {`
                    .question__answer--userimage {
                        width: 30px;
                        height: 30px;
                        border-radius: 30px;
                        margin-left: 30px;
                    }
                `}
            </style>
            <img className="question__answer--userimage" src="/images/mori.jpeg" />
            <span className="question__question--name">モリモリ</span>
        </Fragment>
    )
}

