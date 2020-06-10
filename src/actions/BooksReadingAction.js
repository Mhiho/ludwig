import axios from "../axiosInstance";
import { adresse } from "../config";
import { getUser } from "../services/auth";

export const BooksReadingActionTypes = {
  FETCH_BOOK_READING: "FETCH_BOOK_READING",
};

export const fetchReadingBook = (id) => {
  return async (dispatch) => {
    try {
      const contentUrl = `${adresse}/books/${id}`;
      //   const url = `${adresse}/${id}/myReading`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getUser().token,
      };
      const responseGate = await axios.get(contentUrl, { headers: headers });
      //   const response = await axios.get(url, {
      //     headers: headers,
      //   });
      dispatch({
        type: BooksReadingActionTypes.FETCH_BOOK_READING,
        myReading: responseGate.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
