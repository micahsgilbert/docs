import React from 'react'
import "./SubChooser.css"

export default class SubChooser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: ""}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onSubChange(e.target.value)
        this.setState({[e.target.id]: e.target.value})
    }
    render() {
        return (<div id="subChooser">
            <input onChange={this.handleChange} id="text" value={this.state.text} placeholder="Untitled document"></input>
        </div>)
    }
}