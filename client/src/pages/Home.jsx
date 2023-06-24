function Home({ user }) {
  return(
    <div>
      <h1>Homepage</h1>
      {/* <h2>Welcome, {user.username}!</h2> */}
      <h2>Welcome!</h2>
      <h3>Your Groups</h3>
      {/* { listGroups } */}
      <ul>
        <li>Group 1</li> {/* make links */}
        <li>Group 2</li>
      </ul>
    </div>
  )
}

export default Home