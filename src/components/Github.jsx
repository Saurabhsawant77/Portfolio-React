import React, { useState, useEffect } from 'react';

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Saurabhsawant77/repos');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const repoNames = data.map(repo => repo.name);
        const urllinks = data.map(repo => repo.html_url);
        setRepos(repoNames);
        setUrls(urllinks);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="main-githubContainer bg-slate-200 space-y-4">
      <h1 className="text-center text-3xl pt-4">Github Repositories</h1>
      {error && <p>{error}</p>}

    <div className="flex w-full p-4 m-4">
        {repos.map((repo, index) => (
          <div key={index} className="bg-slate-400 shadow-lg rounded-lg hover:bg-gray-500 hover:text-white w-full m-4 px-3 py-3 items-center flex-wrap">
            <a href={urls[index]} target="_blank" rel="noopener noreferrer">
             <p> {repo} </p>
            </a>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Github;
