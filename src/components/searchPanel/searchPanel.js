import React, {Component} from 'react';
import {connect} from 'react-redux';
import {projectsLoaded, searchSet} from '../../actions';
import {
  Input,
  InputGroup,
  Form,
  Button,
  FormText
} from 'reactstrap';
import './searchPanel.scss';

class SearchPanel extends Component {
  componentDidMount() {
    this.props.searchSet('');
    this.props.projectsLoaded([]);
  }

  clearAll = () => {
    this.props.searchSet('');
    this.props.projectsLoaded([]);
  }

  render() {
    const {searchPhrase, searchSet} = this.props;
    return (
      <div className='search-panel'>
        <Form inline>
          <InputGroup>
            <Input
              id='search-phrase'
              onChange={(e) => searchSet(e.target.value)}
              placeholder='Введите название проекта'
              value={searchPhrase}
              type={'text'}
            />
            <Button color='primary' onClick={this.clearAll} >Очистить</Button>
          </InputGroup>
          <FormText>Необходимо ввести не менее 5 символов.</FormText>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({searchPhrase}) => {
  return {
    searchPhrase
  }
};

const mapDispatchToProps = {
  searchSet,
  projectsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);