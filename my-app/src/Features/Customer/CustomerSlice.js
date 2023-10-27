import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createAt: "",
};

const accountSlice = createSlice({
  name: "Customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: { fullName, nationalId },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createAt = action.payload.createId;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = accountSlice.actions;

export default accountSlice.reducer;

// export default function customerReducer(state = InitialStateCustomer, action) {
//   switch (action.type) {
//     case "Customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createAt: action.payload.createId,
//       };
//     case "Customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "Customer/createCustomer",
//     payload: { fullName, nationalId, createAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "Customer/updatename", payload: fullName };
// }
