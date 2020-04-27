import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { booksReducer } from '../reducers/booksReducer'
import { booksReadingReducer } from '../reducers/booksReadingReducer'

const rootReducer = combineReducers({
    booksState: booksReducer,
    booksReadingState: booksReadingReducer
})


export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}