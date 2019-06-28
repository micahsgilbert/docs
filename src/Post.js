import React from 'react'
import CommentContainer from "./CommentContainer.js"
import "./Post.css"
import MarkdownParser from './MarkdownParser.js';

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {comments: null, controller: new AbortController(), post: this.props.post}
        this.getComments = this.getComments.bind(this)
        if (Array.isArray(this.props.children)) { // if yes, then we already have comments
            this.state.post = this.props.children[0].data.children[0]
            this.state.comments = this.props.children[1]
        } else {
            this.state.post = this.props.children
            this.getComments()
        }
    }

    getComments() {
        const signal = this.state.controller.signal
        fetch(this.props.url + "/comments/" + this.props.children.data.id + ".json?sort=top?limit=100", {
            mode: "cors",
            signal
        },).then(res => {
            res.json().then(res => {
                this.setState({comments: res[1]})
            })
        }).catch(e => {})
    }
    componentWillUnmount() {
        this.state.controller.abort()
    }
    render() {

        if (this.state.post === "dummy") {
            return <div className="dummy post"></div>
        }

        const dataType = this.state.post.data.post_hint
        const valid = dataType === "image" || dataType === "self" || dataType === "link" || !dataType

        return (<div className="post">
            <h3><MarkdownParser>{this.state.post.data.title}</MarkdownParser></h3>
            <h4 className="subtitle">{this.state.post.data.subreddit_name_prefixed} - u/{this.state.post.data.author}</h4>
            {dataType === "image" && <img src={this.state.post.data.url} width="400px" alt=""/>}
            {(dataType === "self" || !dataType) && <p>{<MarkdownParser>{this.state.post.data.selftext}</MarkdownParser>}</p>}
            {dataType === "link" && <a target="_blank" rel="noopener noreferrer" href={this.state.post.data.url}>{this.state.post.data.title}</a>}
            {!valid && <p>The format "{dataType}" cannot be displayed right now.</p>}
            {this.state.comments && this.state.comments.data.children.map((comment, index) => (<CommentContainer comment={comment} key={index} depth={0} />))}
        </div>)
    }
}