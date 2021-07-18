const projectsLoaded = (projects) => {
  return {
    type: 'PROJECTS_LOADED',
    payload: projects
  };
};

const projectsError = () => {
  return {
    type: 'PROJECTS_ERROR'
  };
}

const projectsRequested = () => {
  return {
    type: 'PROJECTS_REQUESTED'
  }
}

const searchSet = (payload) => {
  return {
    type: 'SEARCH_SET',
    payload
  }
}

export {
  projectsLoaded,
  projectsError,
  projectsRequested,
  searchSet
};