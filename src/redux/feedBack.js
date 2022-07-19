import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "",
    message: ""}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FIRSTNAME:
          return {...state, firstname: action.payload};

        case ActionTypes.ADD_LASTNAME:
           return { ...state, lastname: action.payload};
           
        case ActionTypes.ADD_TELNUM:
            return { ...state, telnum: action.payload};

        case ActionTypes.ADD_EMAIL:
            return { ...state, email: action.payload};

        case ActionTypes.ADD_AGREE:
            return { ...state, agree: action.payload};
        
        case ActionTypes.ADD_CONTACT_TYPE:
            return { ...state, contactType: action.payload};

        case ActionTypes.ADD_MESSAGE:
            return { ...state, message: action.payload}

        default:
            return state;
      }
};