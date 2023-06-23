import Group from "./Group"

function Groups({ groups }) {
  return(
    <ul>
      {/* {render_groups} */}
      {groups.map(g => (
        <Group key={g.id} group={g} />
      ))}
    </ul>
  )
}

export default Groups