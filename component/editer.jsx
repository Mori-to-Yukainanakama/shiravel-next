import React, { useState } from "react";
import 'easymde/dist/easymde.min.css';
import DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false});
const marked = dynamic(() => import('marked'), { ssr: false});

export default function MarkdownEditor() {
    // state
    const [markdownValue, setMarkdownValue] = useState("");
    const [html, setHtml] = useState("");

    // 入力した文字をstateにset
    const onChange = (value) => {
        setMarkdownValue(value);
        // setHtml({__html: DOMPurify.sanitize(marked(markdownValue)})
    };

    return(
        <>
            
            <div id="question">
                <div id="editer">
                    <SimpleMDE value={markdownValue}  onChange={onChange} />
                </div>
                <div id="preview">
                    {markdownValue}
                </div>
            </div>
            <style jsx>{`
                // #question {
                //     display:flex;
                //     flex-direction: row;
                // }
                #editer {
                    height:100%;
                }
            `}</style>
        </>
  ) 
};

