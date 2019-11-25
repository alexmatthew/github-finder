import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './Repoitem';

const Repos = ({ repos }) => {
  return repos.map(repo => (
    <div>
      <RepoItem repo={repo} key={repo.id} />
    </div>
  ));
};

Repos.propType = {
  repos: PropTypes.array.isRequired
};
export default Repos;
