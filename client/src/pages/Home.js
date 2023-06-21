function Home({ user }) {
  return(
    <div>
      <h2>Homepage</h2>
      <h2>Welcome, {user.username}!</h2>
    </div>
  )
}

export default Home