import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./Features/Account/AccountSlice";
import customerReducer from "./Features/Customer/CustomerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  Account: accountReducer,
  Customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
