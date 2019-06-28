import React from 'react'
import PostPreview from './PostPreview.js'
import "./PostPreviewDisplayer.css"

export default class PostPreviewDisplayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {expanded: false, posts: []}
        this.toggle = this.toggle.bind(this)
        this.handlePostSelection = this.handlePostSelection.bind(this)
        this.getPosts = this.getPosts.bind(this)
        window.addEventListener("click", (e) => {
            if ((document.getElementById("postDisplayer").contains(e.target) || document.getElementById("logo").contains(e.target))&& !this.state.expanded) {
                this.toggle()
            } else if (!document.getElementById("postDisplayer").contains(e.target) && this.state.expanded) {
                this.toggle()
            }
        })
    }

    toggle() {
        if (!this.state.expanded) {
            this.getPosts(this.props.sub)
        }
        this.setState({expanded: !this.state.expanded})
        this.props.onOpen()
    }

    handlePostSelection(post) {
        this.props.onPostSelect(post)
        this.setState({selectedPost: post})
        this.forceUpdate()
    }

    getPosts(sub) {
        this.setState({posts: []})
        fetch(this.props.url + `/r/${sub}.json`, {
            mode: "cors",
        }).then(res => {
            res.json().then(res => {
                if (!res.error) {
                    this.setState({posts: res.data.children})
                }
            }).catch(e => {})
        })
    }

    render() {
        return (
        <div>
            <button id="logo" ><img src="logo.png" alt=""/></button>
            <div id="postDisplayer" style={{height: this.state.expanded ? 200 : 0, border: !this.state.expanded && "none"}}>
            {this.state.expanded && this.state.posts.map((post, i) => <PostPreview key={i} post={post} onSelect={this.handlePostSelection} selected={(post === this.state.selectedPost)}/>)}
        </div></div>)
    }
}