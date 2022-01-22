import Head from "next/head";   
import React, { useState } from "react";
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false});
import { marked } from 'marked';
import Button from '@mui/material/Button';

// 上野くんがglobal.cssに当てたスタイリングを一旦componentだけのものに移し替えた（影響範囲が広すぎるため）
// module.cssではタグ名でのスタイリングはできない模様（クラス名で当てるようにする修正が必要）
// import styles from "../../../styles/Input.module.css"

export default function Input() {

    // state
    const [markdownValue, setMarkdownValue] = useState("");

    // 入力した文字をstateにset
    const onChange = (event) => {
        setMarkdownValue(event);
        console.log(event);
    };

    // MDEツールバー
    const toolbar = [
        'bold',
        'italic',
        'heading',
        'quote',
        'unordered-list',
        'ordered-list',
        'code',
        'link',
        'image',
    ]

    // function convertMarkdown( text ) {
    //     text = marked(text)
    //     /**
    //      * オレオレ変換をかける
    //      */
    //     return text
    //       .replace(/ id=".+?"/g,'')
    //       .replace(/<\/p><\/p>/g,'</p>')
    //       .replace(/<h1>/g,"\n<h1>")
    //       .replace(/<\/h1>/g,"</h1>\n")
    //       .replace(/<h2>/g,"\n<h2>")
    //       .replace(/<\/h2>/g,"</h2>\n")
    //       .replace(/<h3>/g,"\n<h3>")
    //       .replace(/<\/h3>/g,"</h3>\n")
    //       .replace(/<h4>/g,"\n<h4>")
    //       .replace(/<\/h4>/g,"</h4>\n")
    //       .replace(/<h5>/g,"\n<h5>")
    //       .replace(/<\/h5>/g,"</h5>\n")
    //       .replace(/<h6>/g,"\n<h6>")
    //       .replace(/<\/h6>/g,"</h6>\n")
    //       .replace('<!--more-->',"\n<!--more-->\n")
    //       .replace(/<pre>/g,"\n\n<pre>")
    //       .replace(/<\/pre>/g,"</pre>\n\n")
    //       .replace(/<p><a[^>]*?href="(https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)"[^>]*?>(https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)<\/a><\/p>/g,"\n$2\n")
    //   }

    
    return (
        <>
            <div>
                <Head>
                <title>質問投稿画面｜Shiravel（シラベル）</title>
                </Head>
                <body>
                    <input id="question-title" type="" placeholder='タイトル：わからないこと、解決したいことを10文字以上で書いてください' ></input>
                    <div className="question">
                        <div id="editor">
                            <SimpleMDE value={markdownValue}  onChange={onChange} options={{ 
                                maxHeight: "697px",
                                autofocus:true,
                                insertTexts: {
                                    horizontalRule: ["", "\n"],
                                    image: ["![](http://", ")"],
                                    link: ["[", "](http://)"],
                                    table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                                },
                                styleSelectedText:true,
                                forceSync:false,
                                spellChecker:false, 
                                breaks:true,
                                xhtml:true,
                                status:true,
                                toolbar:toolbar,
                                lineWrapping:true,
                                }}  
                            />
                        </div>
                        <div id="preview-area">
                            <div id="preview-title">
                                <p>プレビュー</p>
                            </div>
                            <div id="preview">
                                <div dangerouslySetInnerHTML={{ __html: marked(markdownValue)}}/>
                            </div>
                        </div>
                        
                    </div>
                    <footer>
                        <span id="doQuestion">
                            <Button id="button" variant="contained">質問する</Button>
                        </span>
                    </footer>
                </body>
            </div>
            
            <style jsx>{`
                
                    html {
                        height:100%;
                    }

                    body {
                        height:100%;
                    }
                    
                    .question {
                        position:fixed;
                        display:flex;
                        flex-direction: row;
                        width:100%;
                        height:100%;

                    }

                    #question-title {
                        display:block;
                        height:50px;
                        width:100%;
                        padding:6px 0 8px 49px;
                        font-size:20px;
                        border:1px solid #ddd;
                    }

                    #editor {
                        width:50%;
                        height:100%;
                        display:block;
                    }

                    #preview {
                        width:100%;
                        height:718px;
                        margin-top:48px;
                        padding:16px 24px 0;
                        border:1px solid #ddd;
                        overflow: scroll;
                        word-break: break-all;
                    }
                    
                    #preview-area {
                        width:50%;
                        height:768px;
                        border:1px solid #ddd;
                    }

                    #preview-title {
                        height:48px;
                        width:100%;
                        font-size:13px;
                        color:#aaa;

                        position:fixed;
                    }

                    #preview-title p {
                        padding:0 24px 0;
                        margin-top:18px;
                    }

                    footer {
                        width:100%;
                        background-color:#eee;
                        padding:10px;
                        position:fixed;
                        bottom:0;
                        border-top:1px solid #ddd;
                    }

                    #doQuestion {
                        float:right;
                        margin-right:20px;
                    }

            `}</style>
        </>
        
    )
}
