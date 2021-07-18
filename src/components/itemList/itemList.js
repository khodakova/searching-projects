import React, {Component} from 'react';
import Loading from "../loading";
import ItemCard from "../itemCard";
import ErrorPanel from "../errorPanel";
import {projectsLoaded, projectsError, projectsRequested} from '../../actions';
import WithSearchService from "../hoc";
import {connect} from "react-redux";
import './itemList.scss';

class ItemList extends Component {
  componentDidMount() {
    this.props.projectsLoaded([]);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchPhrase !== prevProps.searchPhrase) {
      this.updateList();
    }
  }

  updateList() {
    const {searchPhrase} = this.props;
    if (searchPhrase.length >= 5) {
      this.props.projectsRequested();
      const {SearchService} = this.props;
      SearchService.getAllProjects(searchPhrase)
        .then(res => this.props.projectsLoaded(res))
        .catch(() => this.props.projectsError())
    }
  }

  goToProject(name, author) {
    window.location = `https://github.com/${author}/${name}`;
  }

  render() {
    const {projects, loading, error, searchPhrase} = this.props;

    if (error & searchPhrase.length > 0) {
      return <ErrorPanel/>
    }
    if (loading) {
      return <Loading/>
    }

    if (projects.length === 0 & searchPhrase.length >= 5) {
      return (
        <h3 className='item-list_empty'>Проектов с заданным именем нет</h3>
      )
    }

    const items = projects.map(project => {
      return (
        <ItemCard
          key={project.id}
          {...project}
        />
      )
    })

    return (
      <View items={items} />
    )
  }
}

const View = ({items}) => {
  return (
    <div className='item-list'>
      {items}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    loading: state.loading,
    error: state.error,
    searchPhrase: state.searchPhrase
  }
}

const mapDispatchToProps = {
  projectsLoaded,
  projectsError,
  projectsRequested
}

export default WithSearchService()(connect(mapStateToProps, mapDispatchToProps)(ItemList));