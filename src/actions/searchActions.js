import {SEARCH_MOVIE} from './types';

export const searchMovie = text => dispatchEvent => {
	dispatch({
		type: SEARCH_MOVIE,
		payload: text
	});
};