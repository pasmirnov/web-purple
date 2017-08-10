import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import SubscriptionForm from '../../components/subscription-form/subscription-form';
import PostsFeed from '../../components/feed-page/posts-feed';

import { eventsSelector, loadPosts } from './posts-reducers.js';


class FeedPageContainer extends React.Component {
    render() {
        return (
            <div>
                <SubscriptionForm />
                <PostsFeed {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: postsSelector(state, ownProps),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadPosts,
}, dispatch);



export default compose(
    withRouter,
    connect(mapStateToProps)
)(FeedPageContainer);
