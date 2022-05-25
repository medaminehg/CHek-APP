import {FILM_GET} from "../constants/actionsTypes";


const initialState = {
    film: [],
    
}

const reducerFilm = (state = initialState, action) => {
    switch (action.type) {
        case FILM_GET:
            return { ...state, film: action.payload }

       
        default:
            return state;
    }
}

export default reducerFilm