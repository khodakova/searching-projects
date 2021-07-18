import React, {Component} from 'react';
import ErrorPanel from "../errorPanel";

export default class ErrorBoundry extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    if (this.state.error){
      return <ErrorPanel/>
    }

    return this.props.children;
  }
}