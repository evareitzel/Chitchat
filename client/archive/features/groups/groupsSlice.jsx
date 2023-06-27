// import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";
// import { useEffect } from "react";

  export function fetchGroups() {
    return function (dispatch) {
      dispatch({ type: "groups/groupsLoading" });
      fetch('/groups')
        .then(r => r.json())
        .then(groups => {
          dispatch({ type: "groups/groupsLoaded", payload: groups });
        })
    }}


const initialState = {
  entities: [], // array of groups
  status: "idle", // loading state
};

export default function groupsReducer(state = initialState, action) {

  // // fetch("/groups")
  // fetch('http://localhost:3000/groups')
  // .then((r) => {
  //   return r.json()
  // })
  // .then((groups) => {
  //   // instead of logging here, call dispatch and send the cat JSON data to your store
  //   //
  // });

  switch (action.type) {
    case "groups/groupsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "groups/groupsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}


/////////////////////////////////////////////
  // const groupsSlice = 
  // createSlice({
  //   name: "groups",
  //   initialState: {
  //     entities: [],
  //   },
  //   reducers: {
  //     // add reducers here
  //   },
  // });

//  from (placement in app?)--> https://stackoverflow.com/questions/62895908/grab-and-display-single-json-object-in-react-redux
  // switch(input) {
  //   case GET_GROUPS:
  //     return {
  //       ...state,
  //       groups: Action.payload.reduce((accObj, curObj) => {...accObj, [curObj._id]: curObj}, {}),
  //       loading: false
  //     }
  //   // case GET_GROUP:
  //   //   return {}
  //   default:
  //     return (state)  
  //   }

// export reducers here
// export default groupsSlice.reducer;
