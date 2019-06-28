import React from 'react'
import "./PostPreview.css"

export default class PostPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {selected: this.props.selected}
        this.toggleSelected = this.toggleSelected.bind(this)
    }

    componentWillReceiveProps({selected}) {
        this.setState({selected})
    }

    toggleSelected() {
        if (this.state.selected) {
            this.setState({selected: false})
            this.props.onSelect(false)
        } else {
            this.setState({selected: true})
            this.props.onSelect(this.props.post)
        }
    }

    render() {
        return <button onClick={this.toggleSelected} className={this.state.selected ? "preview selected" : "preview normal"}>r/{this.props.post.data.subreddit} - {this.props.post.data.title.substr(0, 70)}{(this.props.post.data.title.length > 70 && "...")}</button>
    }
}