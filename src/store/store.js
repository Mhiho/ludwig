import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { booksReducer } from '../reducers/booksReducer'


const rootReducer = combineReducers({
    booksState: booksReducer,
})


export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}