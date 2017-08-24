import { List, fromJS } from 'immutable';
import { createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import { getJson } from '../../utils/ajax';
import { getFormValues, change } from 'redux-form';

const initialState = fromJS({
    isFetching: false,
    posts: [],
});

export const FORM_KEY = 'feed-page';
const SEARCH_POSTS_KEY = 'search-posts';

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

export const searchPosts = searchValue => change(FORM_KEY, SEARCH_POSTS_KEY, searchValue);

const formSelector = state => getFormValues(FORM_KEY)(state);

const searchPostsSelector = createSelector(
    formSelector,
    form => form && form[SEARCH_POSTS_KEY],
);
const allPostsSelector = state => {
    return state.posts.get('posts')
};

const filterPosts = (posts, searchValue) => {
    if (searchValue) {
        return posts.filter((post) => {
            var lowerCaseSearchValue = searchValue.toLowerCase();
            return post.title.toLowerCase().indexOf(lowerCaseSearchValue) !== -1
                || (post.description && post.description.toLowerCase().indexOf(lowerCaseSearchValue) !== -1);
        })
    } else {
        return posts;
    }
}

export const postsSelector = createSelector(
    allPostsSelector,
    searchPostsSelector,
    filterPosts,
);
