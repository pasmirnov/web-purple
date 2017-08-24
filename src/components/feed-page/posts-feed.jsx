import React from 'react';
import styled, { withTheme } from 'styled-components';
import { List } from 'immutable';
import { compose, setPropTypes } from 'recompose';

import { tags } from './posts-stub';
import BlockHeader from '../common/block-header';
import MainContainer from '../common/main-container';

import {
    FilterBlock,
    Search,
} from '../page-filter';

import PostsList from './posts-list';

import { TagList } from '../common/tag';
import Loader from '../common/loader';

const BorderlessButton = styled.button` 
    font-family: Rubik;
	font-size: 2.4rem;
	font-weight: bold;
	background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
	color: ${props => props.color || props.theme.greyishBrown};
    `;
const Icon = styled.span`
    width: 1.5rem;
	font-weight: bold;
	margin-right: 1.2rem;
	color: ${props => props.color || props.theme.warmGrey};
	line-height: 1.0;
`;

export const NoEventsBlock = styled.div`
    margin: 10rem 0;
    text-align: center;
    font-family: 'Oxygen', sans-serif;
    font-size: 2.5rem;
    color: ${props => props.theme.warmPurple};
`;

const PostsFeed = ({ theme, posts, isFetching, onSearch }) => (
    <MainContainer>
        <BlockHeader>Feed</BlockHeader>
        <FilterBlock>
            <BorderlessButton> <Icon>+</Icon>Suggest news</BorderlessButton>
            <Search placeholder="Keyword..."
                onChange={event => onSearch(event.target.value)} />
        </FilterBlock>
        {(tags.length > 0) && (
            <TagList label="News' tags" tags={tags} />
        )}

        {isFetching ? <Loader size="80" border="8" />
            : posts.size === 0
                ? <NoEventsBlock>There are no posts satisfying your query...</NoEventsBlock>
                : <PostsList posts={posts} />
        }
    </MainContainer>);

const propTypes = {
    theme: React.PropTypes.object,
    posts: React.PropTypes.instanceOf(List).isRequired,
    onSearch: React.PropTypes.func,
    isFetching: React.PropTypes.bool
};


export default compose(
    withTheme,
    setPropTypes(propTypes),
)(PostsFeed);
