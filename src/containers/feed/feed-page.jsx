import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle, setPropTypes } from 'recompose';
import { withRouter } from 'react-router-dom';

import SubscriptionForm from '../../components/subscription-form/subscription-form';
import PostsFeed from '../../components/feed-page/posts-feed';

import { allPostsSelector, loadPosts } from './posts-reducers.js';

const FeedPageContainer = (props) => (
    <div>
        <SubscriptionForm />
        <PostsFeed {...props} />
    </div>
)


const lifecycleHooks = {
    componentDidMount() {
        this.props.loadPosts()
    }
}

const propTypes = {
    loadPosts: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    posts: allPostsSelector(state, ownProps),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadPosts,
}, dispatch);

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps),
    lifecycle(lifecycleHooks),
    setPropTypes(propTypes),
)(FeedPageContainer);
