import React from 'react'
import "./FirstTime.css"

export default class FirstTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {shown: !window.localStorage.getItem("neverShowAgain")}
        this.collapse = this.collapse.bind(this)
        this.neverShowAgain = this.neverShowAgain.bind(this)
    }

    collapse() {
        this.setState({shown: false})
    }

    neverShowAgain() {
        window.localStorage.setItem("neverShowAgain", true)
        this.setState({shown: false})
    }

    componentWillReceiveProps(p) {
        if (p.show === false) {
            this.setState({shown: false})
        }
    }

    render() {
        if (this.state.shown) {
            return (<div id="firstTimeMessage">
                <h3>First Time?</h3>
                <p>Click the docs logo to open the post list. In the document naming input box, type the name of a sub, and it will be loaded when you close and reopen the post list.<br /><button onClick={this.collapse}>Close</button><button onClick={this.neverShowAgain}>Never Show Again</button></p>
            </div>)
        }
        return null
    }
}