import axios from '../axiosInstance'
import { adresse } from '../config'

export const BooksActionTypes = {
    FETCH_ALL_BOOKS: 'FETCH_ALL_BOOKS',
    SELECT_BOOK: 'SELECT_BOOK',
    TOGGLE_BOOK: 'TOGGLE_BOOK'
    //   DELETE = 'DELETE',
    //   ADD = 'ADD',
    //   CHANGE = 'CHANGE'
}

export const getAllBooks = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${adresse}/books/all`);
            dispatch({
                type: BooksActionTypes.FETCH_ALL_BOOKS,
                books: response.data,
            });
        } catch (err) {
            console.error('coooos' + err);
        }
    };
};

export const selectBook = (id) => {
    return {
        type: BooksActionTypes.SELECT_BOOK,
        id: id
    }
}

export const toggleBook = (id) => {
    return {
        type: BooksActionTypes.TOGGLE,
        id: id
    }
}

// export const deleteBook = (id) => {
//   return {
//     type: BooksActionTypes.DELETE,
//     id: id
//   }
// }

// export const addBook = (id) => {
//   return {
//     type: BooksActionTypes.ADD,
//     id: id
//   }
// }

// export const changeBook = (id) => {
//   return {
//     type: BooksActionTypes.CHANGE,
//     id: id,
//   }
// }