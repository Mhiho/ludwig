import { CheckpointReadingActionTypes } from "../actions/CheckpointReadingAction";

export const checkpointsReadingReducer = (
  state = { checkpoints: [] },
  action
) => {
  switch (action.type) {
    case CheckpointReadingActionTypes.FETCH_CHECKPOINTS: {
      return {
        ...state,
        checkpoints: action.checkpoints,
      };
    }
    default:
      return state;
  }
};
