import { combineReducers } from "redux";
import DataReducers from "./reducer";

const rootReducer = combineReducers({
  data: DataReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
