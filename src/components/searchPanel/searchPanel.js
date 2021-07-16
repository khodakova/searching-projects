import React, {Component} from 'react';
import {
  Input,
  InputGroup
  // InputGroupAddon,
  // Button
} from "reactstrap";
import './searchPanel.scss';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ''
    }
    this.onValueChange = (e) => {
      this.setState({searchPhrase: e.target.value});
      this.props.onValueChange(e.target.value);
    }
  }

  render() {
    return (
      <div className='search-panel'>
        <InputGroup>
          <Input
            id='search-phrase'
            onChange={this.onValueChange}
            placeholder='Введите название проекта'
          />
          {/*<InputGroupAddon addonType="prepend">*/}
          {/*  <Button>Искать</Button>*/}
          {/*</InputGroupAddon>*/}
        </InputGroup>
      </div>

    )
  }
}