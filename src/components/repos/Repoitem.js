import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <i className='fab fa-github' style={{ padding: '10px' }} />
        <span>Repo: </span>
        <a href={repo.html_url} style={{ textDecoration: 'underline' }}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
