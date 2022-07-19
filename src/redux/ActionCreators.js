import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl';


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const FetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const addFirstName = (value) => ({
    type: ActionTypes.ADD_FIRSTNAME,
    payload: value
})

export const addLastName = (value) => ({
    type: ActionTypes.ADD_LASTNAME,
    payload: value
})

export const addTelNum = (value) => ({
    type: ActionTypes.ADD_TELNUM,
    payload: value
})

export const addEmail = (value) => ({
    type: ActionTypes.ADD_EMAIL,
    payload: value
})

export const addAgree = (value) => ({
    type: ActionTypes.ADD_AGREE,
    payload: value
})

export const addContactType= (value) => ({
    type: ActionTypes.ADD_CONTACT_TYPE,
    payload: value
})

export const addMessage= (value) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: value
})

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
