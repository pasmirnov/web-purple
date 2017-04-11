import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SubscriptionForm from '../../components/subscription-form/subscription-form';
import PostsFeed from '../../components/feed-page/posts-feed';


class FeedPageContainer extends React.Component {
    render() {
        return (
            <div>
                <SubscriptionForm />
                <PostsFeed />
            </div>
        );
    }
}



export default withRouter(
    connect()(FeedPageContainer)
);
