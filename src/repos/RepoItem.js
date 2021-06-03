import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className='test'>
      <h5>
        <a href={repo.html_urf}>{repo.name}</a>
      </h5>
    </div>
  );
};
export default RepoItem;
