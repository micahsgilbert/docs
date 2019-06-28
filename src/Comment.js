import React from 'react'
import "./Comment.css"
import MarkdownParser from "./MarkdownParser.js"

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if (this.props.children.data.score) {
            let body = this.props.children.data.body
            if (this.props.break) {
                if (body.length > 50) {
                    body = body.substr(0, 50) + "..."
                }
                return <p className="comment">{body}</p>
            }
        return <p className="comment"><span className="score">{this.props.children.data.score}</span> - <span className="author">{this.props.children.data.author}</span> - <MarkdownParser>{body}</MarkdownParser></p>
        }
        return null
    }
}