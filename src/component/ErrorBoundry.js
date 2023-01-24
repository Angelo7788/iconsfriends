import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {          // state obj in class component // we need the super()
            hasError: false
        }
    }
    // lyfecycle hook to catch error
    componentDidCatch({error, info}) {
        this.setState({ hasError: true})  // goes to change our state if catch an error
    }

    render() {
        if (this.state.hasError) {      // if true return aa or return bb
            return <h1>There is an Error!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;