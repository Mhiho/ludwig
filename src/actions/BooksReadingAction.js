import axios from '../axiosInstance'
import { adresse } from '../config'
import { getUser } from '../services/auth'

export const BooksReadingActionTypes = {
    FETCH_BOOK_READING: 'FETCH_BOOK_READING'
}

export const fetchReadingBook = () => {
    return async (dispatch) => {
        try {
            const url = `${adresse}/myReading`
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + `${getUser().token}`
            }
            const response = await axios.get(url, {
                headers: headers
            });
            dispatch({
                type: BooksReadingActionTypes.FETCH_BOOK_READING,
                myReading: response.data,
            });
        } catch (err) {
            console.error('coooos' + err);
        }
    };
};