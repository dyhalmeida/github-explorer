export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a target="_blank" href={props.repository.html_url}>
        Go
      </a>
    </li>
  );
}