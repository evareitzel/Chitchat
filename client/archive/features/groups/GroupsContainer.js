import { useDispatch, useSelector } from "react-redux" 
import { fetchGroups } from "../../actions/groups"
import Groups from "./Groups"
import React, { useEffect } from "react"

function GroupsContainer() {
  const groups = useSelector(state => state.groups)
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchGroups()), [])

  return(
    <div>
      <p>src/features/groups/Groups</p>
      {groups.list.length === 0 ? 'Loading...' : <Groups groups={groups} />}
    </div>
  )
}

export default GroupsContainer


  // [-- DEV testing (not wkg))

      // [JSONViewer] Your json was stored into 'window.json', enjoy!  

  //   useEffect(() => {
  //     fetch('/groups')
  //     .then(r => r.json())
  //     .then(g => dispatch({type: "SET_GROUPS", groups: g}))
  //   }, [])

  // const showGroups = () => groups.map(g => {
  //   return (
  //     <div>
  //       {g.name}
  //     </div>
  //   )
  // })

  // end DEV testing --]

  // {showGroups} {/* DEV testing */}

  //////// NOTES ///////////
    // **********
  // const groups = useSelector(state => state.groups) // .entities) // **** Flatiron uses entities but it breaks my app (?) ****

  // const dispatch = useDispatch()

  // // fetch not wkg
  // useEffect(() => {
  //   fetch('/groups')
  //   .then(r => r.json())
  //   // .then(g => dispatch({type: "SET_GROUPS", groups: g}))
  // }, [])

    // if(groups.list.length === 0) {
    //     return null
    //   }

  //   const mapStateToProps = (state) => {
  //     return {
  //         group: state.groups.list,
  //         status: state.groups.status,
  //     }
  // }
  
  // const mapDispatchToProps = (dispatch) => {
  //     return {
  //         fetchGroups : () => dispatch(fetchGroups())
  //     }
  // }
  
  // export default connect(mapStateToProps, mapDispatchToProps)(Circles)


  ///////////////////////////////////
  // import { useEffect } from "react" // useDispatch and useEffect not here in Flatiron lab --> came from https://medium.com/swlh/quick-guide-for-fetching-api-data-using-react-redux-and-hooks-with-explanation-10503726bc6b

     // useSelector, connect,
  // class GroupsContainer extends React.Component {


  // const groups = useSelector(state => state)
   // .entities)
     // const groups = useSelector(state => state.groups.entities)
    {/* <Groups groups={groups} /> */}

 // export default connect(mapStateToProps, mapDispatchToProps)(Groups)