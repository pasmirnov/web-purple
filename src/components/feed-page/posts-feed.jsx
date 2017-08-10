import React from 'react';
import styled, { withTheme } from 'styled-components';

import { tags } from './posts-stub';
import BlockHeader from '../common/block-header';
import MainContainer from '../common/main-container';

import {
    FilterBlock,
    Search,
} from '../page-filter';

import PostsList from './posts-list';

import { TagList } from '../common/tag';

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


const PostsFeed = ({ theme }) => (
    <MainContainer>
        <BlockHeader>Feed</BlockHeader>
        <FilterBlock>
            <BorderlessButton> <Icon>+</Icon>Suggest news</BorderlessButton>
            <Search placeholder="Keyword..." />
        </FilterBlock>
        {(tags.length > 0) && (
            <TagList label="News' tags" tags={tags} />
        )}
        <PostsList>
        </PostsList>
    </MainContainer>);

PostsFeed.propTypes = {
    theme: React.PropTypes.object,
    posts: React.PropTypes.instanceOf(List).isRequired,
};

export default withTheme(PostsFeed);
