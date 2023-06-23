import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Groups from "./Groups"

function GroupsContainer() {
  const groups = useSelector(state => state.groups) // .entities)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/groups')
    .then(r => r.json())
    // .then(r => console.log(`Groups: ${r}`))
    // .then(g => dispatch({type: "SET_GROUPS", groups: g}))
  }, [])


  return(
    <>
      <Groups groups={groups} />
    </>
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