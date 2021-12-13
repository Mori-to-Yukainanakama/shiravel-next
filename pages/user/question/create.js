import Head from "next/head";
//import Editer from '/Users/user/Documents/愉快な仲間/shiravel-next/component/editer.jsx';
//import {useState, useEffect} from 'react';
import React, { useState } from "react";
import 'easymde/dist/easymde.min.css';
import DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false});
const marked = dynamic(() => import('marked'), { ssr: false});

export default function create() {

    // state
    const [markdownValue, setMarkdownValue] = useState("");
    const [html, setHtml] = useState("");

    // 入力した文字をstateにset
    const onChange = (value) => {
        setMarkdownValue(value);
        // setHtml({__html: DOMPurify.sanitize(marked(markdownValue)})
    };
    
    return (
        <>
            <html>
                <Head>
                <title>質問投稿画面</title>
                </Head>
                <body>
                    <input　id="question-title" type="" placeholder='タイトル：わからないこと、解決したいことを10文字以上で書いてください' ></input>
                    <div className="main">
                        <div id="editer">
                            <SimpleMDE value={markdownValue}  onChange={onChange} />
                        </div>
                        <div id="preview">
                            {markdownValue}
                        </div>
                    </div>
                </body>
            </html>
            
            <style jsx>{`

                    #question-title {
                        display:block;
                        height:50px;
                        width:100%;
                        pading:6px 0 8px 49px;
                        font-size:20px;
                        border:1px solid #ddd;
                        background: #bbddff;
                    }

                    html {
                        height:100%;
                    }

                    body {
                        height:100%;
                        //background: #bbddff;

                    }
                    
                    .main {
                        margin-top:10px;
                        display:flex;
                        flex-direction: row;
                        width:100%;
                        height:800px;
                        //background: #bbddff;
                    }

                    .CodeMirror {
                        height:100%;
                    }

                    #editer {
                        width:50%;
                        heigth:1000px;
                    }

                    #preview {
                        width:50%;
                        heigth:1000px;
                        border:1px solid #ddd;
                    }
                    
            `}</style>
        </>
        
    )
}
