import {
  AppState,
  FacesActionTypes,
  FETCH_FACES_BEGIN,
  FETCH_FACES_FAILURE,
  FETCH_FACES_SUCCESS,
} from "../types/types";

const initialState: AppState = {
  faces: [],
  loading: false,
  error: "",
};

const facesReducer = (state = initialState, action: FacesActionTypes): AppState => {
  switch (action.type) {
    case FETCH_FACES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FACES_SUCCESS:
      return {
        ...state,
        loading: false,
        faces: action.payload,
      };
    case FETCH_FACES_FAILURE:
      return {
        faces: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default facesReducer;
