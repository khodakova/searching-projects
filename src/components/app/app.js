import React, {Component} from 'react';
import SearchPanel from "../searchPanel";
import {Container} from "reactstrap";
import SearchService from "../../services/searchService";
import ItemList from "../itemList";
import './app.scss';

export default class App extends Component {
  searchService = new SearchService();
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ''
    }

  this.updateSearch = (searchPhrase) => {
      this.setState({searchPhrase});
  }

  }
  render() {
    // this.searchService.getAllProjects('proj')
    //   .then((res) => console.log(res))
    const {searchPhrase} = this.state;
    return (
      <div className="app">
        <Container>
          <SearchPanel onValueChange={this.updateSearch}/>
          <ItemList
            getItems={this.searchService.getAllProjects}
            getItem={this.searchService.getProject}
            searchPhrase={searchPhrase}
          />
        </Container>
      </div>
    );
  }
}

