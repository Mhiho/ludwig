import {
    BooksActionTypes
} from '../actions/BooksAction';


export const booksReducer = (
    state = { books: [] },
    action
) => {
    switch (action.type) {
        case BooksActionTypes.FETCH_ALL_BOOKS: {
            return {
                ...state,
                books: action.books,
            };
        }
        case BooksActionTypes.SELECT_BOOK: {
            return {
                ...state,
                book: state.books.find((book) => book.id === action.id ? book : null)
            }
        }
        case BooksActionTypes.TOGGLE_BOOK: {
            return {
                ...state, books: state.books.map(book =>
                    book.id === action.id ? { ...book, completed: !book.completed } : book
                )
            }
        }
        default:
            return state;
    }
};