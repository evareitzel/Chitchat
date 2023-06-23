// import { useEffect } from "react" // useDispatch and useEffect not here in Flatiron lab --> came from https://medium.com/swlh/quick-guide-for-fetching-api-data-using-react-redux-and-hooks-with-explanation-10503726bc6b
import { useSelector } from "react-redux" // useDispatch, 
import Groups from "./Groups"

function GroupsContainer() {
  // undefined
  const groups = [
    // {"id": 1, "name": "MON"}, 
    // {"id": 2, "name": "TUE"}, 
  ]
  // **********
  // const groups = useSelector(state => state.groups) // .entities) // **** Flatiron uses entities but it breaks my app (?) ****

  // const dispatch = useDispatch()

  // // fetch not wkg
  // useEffect(() => {
  //   fetch('/groups')
  //   .then(r => r.json())
  //   .then(g => console.log(g)) // not displaying in console
  //   // .then(r => console.log(`Groups: ${r}`))
  //   // .then(g => dispatch({type: "SET_GROUPS", groups: g}))
  // }, [])

  return(
    <div>
      <p>src/features/groups/Groups</p>
      <Groups groups={groups} />
    </div>
  )
}

export default GroupsContainer


  // [-- DEV testing (not wkg))

      // [JSONViewer] Your json was stored into 'window.json', enjoy!  

  //   useEffect(() => {
  //     fetch('/groups')
  //     .then(r => r.json())
  //     .then(r => console.log(`Groups: ${r}`))
  //     .then(g => dispatch({type: "SET_GROUPS", groups: g}))
  //   }, [])

  // console.log(`Groups: ${window.json}`)
  // console.log(document.querySelector(window.json))
  // console.log(groups)

  // const showGroups = () => groups.map(g => {
  //   return (
  //     <div>
  //       {g.name}
  //     </div>
  //   )
  // })

  // end DEV testing --]

  // {showGroups} {/* DEV testing */}