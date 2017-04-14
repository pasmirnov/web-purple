import React from 'react';
import styled, { withTheme } from 'styled-components';

import posts, { tags } from './posts-stub';

import {
    FilterBlock,
    Search,
} from '../page-filter';

import { TagList } from '../common/tag';
import { media } from '../../utils/css-utils';
import MainContainer from '../common/main-container';
import BlockHeader from '../common/block-header';
import { WebpurpleStampIcon } from '../icons';

const Post = styled.li`
    position: relative;
    width: 100%;
    ${media.tablet`width: 30rem;`}
    ${media.hd`width: 35rem;`}
    padding: 2.5rem;
    margin-bottom: 2rem;
    ${media.desktop`margin-bottom: 7rem;`}
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 0 8px 1px #bbb;
`;

const PostsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 3.6rem 0 0;
    ${media.desktop`margin-top: 10rem;`}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const BackgroundShape = styled.div`
    position: absolute;
    top: 0;
    left: -60%;
    width: 230%;
    height: 100%;
    transform: skew(-60deg, 0);
    overflow: hidden;
    z-index: -1;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    filter: grayscale(100);
    opacity: .15;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    transform: skew(60deg, 0);
`;

const Info = styled.span`
    display: flex;
    margin-bottom: 1.6rem;
    font-size: 1.6em;
    font-family: 'Oxygen', sans-serif;
    color: ${props => props.theme.greyishBrown};
    vertical-align: middle;
`;
const Title = styled.a`
    margin: 2.4rem 0;
    font-family: 'Rubik', sans-serif;
    font-size: 3.6rem;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.color || props.theme.vividPurpleTwo};
`;

const Description = styled.p`
    font-size: 1.4rem;
    font-family: 'Oxygen', sans-serif;
    color: ${props => props.theme.greyishBrown};
`;

const AuthorBadge = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    font-family: 'Oxygen', sans-serif;
    margin: 2.4rem 0;
    vertical-align: middle;
    color: ${props => props.color || props.theme.greyishBrown};
`;
const AuthorPhoto = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    margin-right: 1.2rem;
`;
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
            {posts.map((post, postIndex) => (
                <Post>
                    <BackgroundShape>
                        <BackgroundImage url={post.image} />
                    </BackgroundShape>
                    <header>
                        <Info>
                            {post.original ? <WebpurpleStampIcon style={{ marginRight: '1.6em' }} /> : ''}
                            <time>{new Date(post.date).toLocaleDateString()}</time>
                        </Info>
                        <Info>
                            <Title color={postIndex % 2 ? theme.vividPurpleTwo : theme.lipstick} href={post.url}>{post.title}</Title>
                        </Info>
                    </header>
                    <Description>
                        {post.description}
                    </Description>
                    <AuthorBadge>
                        <AuthorPhoto src={post.author.avatar} />
                        {post.author.displayName}
                    </AuthorBadge>

                    <TagList tags={post.tags} />

                </Post>
            ))}
        </PostsList>
    </MainContainer>);

PostsFeed.propTypes = {
    theme: React.PropTypes.object,
};

export default withTheme(PostsFeed);
