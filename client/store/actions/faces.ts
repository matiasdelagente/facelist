import { Dispatch } from "redux";
import {
  Face,
  FacesActionTypes,
  FETCH_FACES_BEGIN,
  FETCH_FACES_FAILURE,
  FETCH_FACES_SUCCESS,
} from "../types/types";

export const fetchFacesBegin = (): FacesActionTypes => ({
  type: FETCH_FACES_BEGIN,
});

export const fetchFacesSuccess = (faces: Face[]): FacesActionTypes => ({
  type: FETCH_FACES_SUCCESS,
  payload: faces,
});

export const fetchFacesFailure = (error: string): FacesActionTypes => ({
  type: FETCH_FACES_FAILURE,
  payload: error,
});

export const fetchFaces = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchFacesBegin());

      const response = await fetch("http://127.0.0.1:9000/api/listings");
      const responseJSON = await response.json();

      dispatch(fetchFacesSuccess(responseJSON));
      return responseJSON;
    } catch (error) {
      dispatch(fetchFacesFailure(error));
    }
  };
};
