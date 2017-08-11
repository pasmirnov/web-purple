import { List, fromJS } from 'immutable';
import { createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import { getJson } from '../../utils/ajax';

const initialState = fromJS({
    isFetching: false,
    posts: [],
});

const REQUEST_POSTS = 'posts/request-posts';
const RECEIVE_POSTS = 'posts/receive-posts';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return state.set('isFetching', true);
        case RECEIVE_POSTS:
            return state
                .set('isFetching', false)
                .set('posts', new List(action.payload));
        default:
            return state;
    }
}

const requestPosts = createAction(REQUEST_POSTS);
const receivePosts = createAction(RECEIVE_POSTS);

export const loadPosts = () => dispatch => {
    dispatch(requestPosts());
    return getJson('/api/posts')
        .then(posts => dispatch(receivePosts(posts)));
};


export const allPostsSelector = state =>  {
    return state.posts.get('posts')
};
