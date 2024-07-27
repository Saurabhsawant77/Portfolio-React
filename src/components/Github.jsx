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
    <div className="main-githubContainer bg-slate-200 p-4">
      <h1 className="text-center text-3xl mb-4">Github Repositories</h1>
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="flex flex-wrap justify-center gap-4">
        {repos.map((repo, index) => (
          <div key={index} className="bg-slate-400 shadow-lg rounded-lg h-2/3 hover:bg-gray-500 hover:text-white p-4 w-full sm:w-80 md:w-96 lg:w-1/4">
            <a href={urls[index]} target="_blank" rel="noopener noreferrer">
              <p className="text-center">{repo}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Github;
