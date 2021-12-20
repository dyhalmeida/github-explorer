import { useEffect, useState } from 'react';
import { RepositoryItem } from './RespositoryItem';
import '../styles/respositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Array<Repository>>([]);

  useEffect(() => {

    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))

  }, []);

  return (
    <section className='repository-list'>
      <h1>Repository List</h1>
      <ul>
        {repositories.map((repository, index) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}