export const FETCH_FACES_BEGIN = "FETCH_FACES_BEGIN";
export const FETCH_FACES_SUCCESS = "FETCH_FACES_SUCCESS";
export const FETCH_FACES_FAILURE = "FETCH_FACES_FAILURE";

export interface Face {
  id: string;
  name: string;
  avatar: string;
}

export interface AppState {
  faces: Face[];
  loading: boolean;
  error: string | null;
}

export type ListProps = {
  facelist: Face[];
};

export type CardProps = {
  face: Face;
};

export type ButtonProps = {
  onPress: () => {};
  title: string;
};

interface FetchFacesBeginAction {
  type: typeof FETCH_FACES_BEGIN;
}

interface FetchFacesSuccessAction {
  type: typeof FETCH_FACES_SUCCESS;
  payload: Face[];
}

interface FetchFacesFailureAction {
  type: typeof FETCH_FACES_FAILURE;
  payload: string;
}

export type FacesActionTypes =
  | FetchFacesBeginAction
  | FetchFacesSuccessAction
  | FetchFacesFailureAction;
