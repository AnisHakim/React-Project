import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem Key={repo.id} repo={repo} />);
};
export default Repos;
