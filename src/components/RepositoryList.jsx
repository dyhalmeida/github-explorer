import { RepositoryItem } from './RespositoryItem';
import '../styles/respositories.scss';

export function RepositoryList() {

  const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
  }

  return (
    <section className='repository-list'>
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}