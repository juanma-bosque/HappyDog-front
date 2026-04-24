
import {
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  REGISTER,
  ALLDOGS,
  NEWDOG,
  DELETE_DOG,
  UPDATE_DOG,
  UPDATE_DOG_ERROR,
} from "../actions/actionCreator";

const initialState = {
  userLogged: {
    id: "",
    name: "",
    role: "",
    logged: false,
  },
  logError: "",
  registerState: "",
  dogs: [],
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerState: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        userLogged: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        logError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userLogged:  action.payload,
      };
    case ALLDOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case NEWDOG:
      return {
        ...state,
        // dogs: state.dogs.concat(action.payload),
      };
    case DELETE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload.id),
      };
    case UPDATE_DOG: {
      const updatedDogs = state.dogs.map(
        (dog, index) =>
          dog.id === action.payload.id &&
          state.dogs.splice(index, 1, action.payload)
      );

      return {
        ...state,
        dogs: updatedDogs,
      };
    }

    case UPDATE_DOG_ERROR:
      return {
        ...state,
        updateDogError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
