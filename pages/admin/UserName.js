import React, { Fragment } from "react"

export const UserName = (props) => {
    return (
        <Fragment>
            <style jsx>
                {`
                    .question__answer--userimage {
                        width: ${props.size}px;
                        height: ${props.size}px;
                        border-radius: ${props.size}px;
                        margin-left: ${props.size}px;
                    }
                `}
            </style>
            <img className="question__answer--userimage" src="/images/mori.jpeg" />
            <span className="question__question--name">モリモリ</span>
        </Fragment>
    )
}

