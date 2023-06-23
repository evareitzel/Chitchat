import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const groupsSlice = 
createSlice({
  name: "groups",
  initialState: {
    entities: [],
  },
  reducers: {
    // add reducers here
  },
});

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
export default groupsSlice.reducer;
