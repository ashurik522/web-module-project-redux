import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {favorites: [], showFavorites: true}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                showFavorites: !state.showFavorites
            }
        case ADD_FAVORITE:
            return {...state, favorites: [...state.favorites, action.payload]}
        case REMOVE_FAVORITE:
            return {...state, favorites: state.favorites.filter(mov=>mov.id !== action.payload.id)}
        default:
            return state;

    }
}

export default favoritesReducer;