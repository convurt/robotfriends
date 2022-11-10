import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    // if there is an error, return the h1, otherwise return the children
    render() {
        if (this.state.hasError) {
            return <h1>Oops. That is not good.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
