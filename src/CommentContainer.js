import React from 'react'
import Comment from "./Comment.js"
import "./CommentContainer.css"

export default class CommentContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {collapsed: false}
        this.toggle = this.toggle.bind(this)
    }
    
    toggle() {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        if (this.props.comment.data.body) {
            return (
                <div className={this.state.collapsed ? "commentContainer min" : "commentContainer"}>
                    <div className={this.state.collapsed ? "bullet small" : "bullet"}><div onClick={this.toggle} className="easyClick"/></div>
                    <Comment break={this.state.collapsed}>{this.props.comment}</Comment>
                    {(this.props.comment.data.replies && !this.state.collapsed) && this.props.comment.data.replies.data.children.map((c, i) => (
                        <CommentContainer comment={c} key={i} depth={this.props.depth + 1}/>
                    ))}
                </div>
            )
        }
        return null
    }
}