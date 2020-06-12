import axios from "../axiosInstance";
import { adresse } from "../config";
import { getUser } from "../services/auth";

export const CheckpointReadingActionTypes = {
  FETCH_CHECKPOINTS: "FETCH_CHECKPOINTS",
  SAVE_CHECKPOINT: "SAVE_CHECKPOINT",
};

export const fetchCheckpoints = () => {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    try {
      const response = await axios.get(`${adresse}/users/getReading`, {
        headers: headers,
      });
      dispatch({
        type: CheckpointReadingActionTypes.FETCH_CHECKPOINTS,
        checkpoints: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
