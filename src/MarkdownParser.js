import React from 'react'

export default function MarkdownParser(props) {
    return <span style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{__html: parse(props.children)}} />
}

function parse(text) { // I learned regexes a few days ago, don't be hard on me.
    text = text.replace(/(\*|-) (.*)/g, "- $2")
    text = text.replace(/\s___(.*)(___)(\s|\.)/g, " <b><i>$1</i></b> ")
    text = text.replace(/\s\*\*\*(.*)(\*\*\*)(\s|\.)/g, " <b><i>$1</i></b> ")
    text = text.replace(/\s__(.*)__(\s|\.)/g, " <b>$1</b> ")
    text = text.replace(/\s\*\*(.*)\*\*(\s|\.)/g, " <b>$1</b> ")
    text = text.replace(/\s_(.*)_(\s|\.)/g, " <i>$1</i> ")
    text = text.replace(/\s\*(.*)\*(\s|\.)/g, " <i>$1</i> ")
    text = text.replace(/~~(.*)~~/g, " <span style='text-decoration: line-through'>$1</span> ")
    text = text.replace(/\[(.*)\]\((.*)\)/g, "<a href='$2'>$1</a>")
    text = text.replace(/\n##(.*)\n/g, "\n<h4>$1</h4>")
    text = text.replace(/\n#(.*)\n/g, "\n<h3>$1</h3>")
    text = text.replace(/\n---\n/g, "")

    text = text.replace(/\\\*/g, "*")
    text = text.replace(/\\_/g, "_")

    return text
}