import {
    GET_TOP_TRACKS_START,
    GET_TOP_TRACKS_ERROR,
    GET_TOP_TRACKS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    data: [],
};

const topTracksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOP_TRACKS_START:
            return { ...state, isLoading: action.payload };
        case GET_TOP_TRACKS_SUCCESS:
            return { ...state, data: action.payload, error: false };
        case GET_TOP_TRACKS_ERROR:
            return { ...state, data: [], error: action.payload };
        default:
            return state;
    }
};

export default topTracksReducer;
