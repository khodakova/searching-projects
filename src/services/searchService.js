export default class SearchService {
  constructor() {
    this._apiBase = 'https://api.github.com/search';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }

  getAllProjects = async (searchPhrase) => {
    const res = await this.getResource(`/repositories?q=${searchPhrase}`);
    // return res;
    return res.items.map(this._transformProject);
  }

  getProject = async (id) => {
    const project = await this.getResource(`/characters/${id}`);
    return this._transformProject(project);
  }

  _transformProject(project) {
    return {
      url: project.url,
      id: project.id,
      name: project.name,
      author: project.owner.login,
      stargazers: project.stargazers_count,
      watchers: project.watchers_count
    }
  }
}