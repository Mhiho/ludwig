import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "../reducers/booksReducer";
import { booksReadingReducer } from "../reducers/booksReadingReducer";
import { checkpointsReadingReducer } from "../reducers/checkpointsReadingReducer";

const rootReducer = combineReducers({
  booksState: booksReducer,
  booksReadingState: booksReadingReducer,
  checkpointsReadingState: checkpointsReadingReducer,
});

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
