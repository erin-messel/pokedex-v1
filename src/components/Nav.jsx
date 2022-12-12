export default ({ cast, onChoice }) => {
  return (
    <nav className="fullList">
      <ul>
        {cast.map(member => (
          <li key={member.id}>
            <button type="button" onClick={() => { onChoice(member) }}>
              {member.id} - 
              {member.name}
            </button>
          </li>
        ))}
      </ul>
     
    </nav>
  )
}