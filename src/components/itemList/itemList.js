import React, {Component} from 'react';
import Loading from "../loading";
import ItemCard from "../itemCard";
import ErrorPanel from "../errorPanel";
import './itemList.scss';

export default class ItemList extends Component {

  state = {
    itemList: null,
    error: false,
    loading: false
  }

  componentDidMount() {
    this.setState({itemList: null})
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchPhrase !== prevProps.searchPhrase) {
      this.updateList();
    }
  }

  updateList() {
    const {searchPhrase} = this.props;
    if (searchPhrase === '') {
      return;
    }
    this.props.getItems(searchPhrase)
      .then((itemList) => {
        this.setState({itemList})
      })
      .catch(this.onError);
  }

  goToProject(name, author) {
    window.location = `https://github.com/${author}/${name}`;
  }

  onError = (err) => {
    this.setState({
      error: true
    })
    console.log(err, 1)
  }

  render() {
    const {itemList, error} = this.state;
    const {searchPhrase} = this.props;
    let items = [];
    const errorPanel = error ? <ErrorPanel/> : null;

    if (!itemList & searchPhrase !== '') {
      return <Loading/>
    }
    if (itemList) {
      items = itemList.map((item) => {
        const {id, ...itemProps} = item;
        return (
          <ItemCard
            key={id}
            id={id}
            {...itemProps}
            goToProject={this.goToProject}
          />
        )
      })
    }
    return (
      <div className='item-list'>
        {errorPanel}
        {items}
      </div>
    )
  }
}