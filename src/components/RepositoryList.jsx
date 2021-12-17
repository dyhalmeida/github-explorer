export function RepositoryList() {

  const repositoryName = "Respository name test";

  return (
    <section className='repository-list'>
      <h1>Repository List</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>repository description</p>
          <a href="#">
            Go
          </a>
        </li>
      </ul>
    </section>
  );
}