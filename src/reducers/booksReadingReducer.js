import {
    BooksReadingActionTypes
} from '../actions/BooksReadingAction';


export const booksReadingReducer = (
    state = { reading: [] },
    action
) => {
    switch (action.type) {
        case BooksReadingActionTypes.FETCH_BOOK_READING: {
            return {
                ...state,
                reading: action.myReading,
            };
        }
        default:
            return state;
    }
};