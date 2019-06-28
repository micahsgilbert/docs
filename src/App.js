import React from 'react'
import PostPreviewDisplayer from "./PostPreviewDisplayer.js"
import Post from "./Post.js"
import DummyPost from "./DummyPost.js"
import SubChooser from './SubChooser.js';
import FirstTime from "./FirstTime.js"
import "./App.css"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            sub: "all",
            neverUsed: true
        }
        if (this.props.post) {
            fetch(this.props.url + "/comments/" + this.props.post + ".json?sort=top", {
            mode: "cors",
            }).then(res => {
                res.json().then(res => {
                    this.setState({post: res, neverUsed: false})
                })
            })
        }
        if (this.props.sub) {
            this.state.sub = this.props.sub
        }

        this.selectPost = this.selectPost.bind(this)
        this.handleSubUpdate = this.handleSubUpdate.bind(this)
        this.handlePreviewOpen = this.handlePreviewOpen.bind(this)
    }

    selectPost(post) {
        this.setState({post: false, neverUsed: false})
        setTimeout(() => {
            this.setState({post})
        }, 100)
    }

    handleSubUpdate(newName) {
        this.setState({neverUsed: false})
        if (newName !== "") {
            this.setState({sub: newName})
        } else {
            this.setState({sub: "all"})
        }
    }

    handlePreviewOpen() {
        this.setState({neverUsed: false})
    }

    render() {
        return (<div id="main">
            <FirstTime show={this.state.neverUsed}/>
            <SubChooser onSubChange={this.handleSubUpdate} url={this.props.url}/>
            <div id="post-list"><PostPreviewDisplayer onPostSelect={this.selectPost} selectedPost={this.state.post} sub={this.state.sub} onOpen={this.handlePreviewOpen} url={this.props.url}/></div>
            <div id="post-container">{this.state.post ? <Post url={this.props.url}>{this.state.post}</Post> : <DummyPost />}</div>
        </div>)
    }
}