import * as types from "../Action/actionType";

interface State {
  loggedIn: boolean;
  token: string | null;
  userId: string | null;
  productList: any[]; // You can replace 'any[]' with a more specific type if available
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  loggedIn: false,
  token: null,
  userId: null,
  productList: [],
};

const DataReducers = (state = initialState, action: Action): State => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn: !!action.payload.token && !!action.payload.userId,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case types.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        userId: null,
      };

    case types.PRODUCTS_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};

export default DataReducers;
