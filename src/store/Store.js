import React, { createContext, useState, useReducer, useContext } from "react"

export const State = createContext()
export const Dispatch = createContext()
export const Actions = createContext()

export const useStore = () => {
  const state = useContext(State)
  return state;
}

export const useActions = () => {
  const actions = useContext(Actions)
  return actions;
}

export const useDispatch = () => {
  const dispatch = useContext(Dispatch)
  return dispatch
}

const defaultState = {
  light: false,
  bookId: null,
  animate: false
}
const initStateReducer = {
  counter: 0
}

const rootReducer = (state = initStateReducer, action = {}) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    default:
      return state;
  }
}

const actions = {
  counter: {
    addCounter: payload => ({ type: "ADD", payload })
  }
}
// export const addAction = () => {
//   return async (dispatch) => {
//     try {

//       dispatch({
//         type: 'ADD',
//         counter: counter + 1
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
// }
export const ThemeContext = createContext(defaultState)

export const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  const [bookId, setBookId] = useState(null);
  const [animate, setAnimate] = useState(false)
  return (
    <ThemeContext.Provider value={{ light, setLight, bookId, setBookId, animate, setAnimate }}>
      {children}
    </ThemeContext.Provider>
  );
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initStateReducer)
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        <Actions.Provider value={actions}>
          {children}
        </Actions.Provider>
      </Dispatch.Provider>
    </State.Provider>
  )
}
export default StoreProvider