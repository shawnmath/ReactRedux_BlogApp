import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:
			// Adds post if not in state otherwise overwrites existing matching post
			return { ...state, [action.payload.data.id]: action.payload.data };
		case DELETE_POST:
			// Return new state object w/ deleted post key id (action.payload) omitted
			return _.omit(state, action.payload);
		default: 
			return state;
	}
}