import React from 'react';
import styled, { withTheme } from 'styled-components';
import Masonry from 'react-masonry-component';
import { List } from 'immutable';
import { compose, lifecycle, setPropTypes } from 'recompose';

import BlockHeader from '../common/block-header';
import { TagList } from '../common/tag';
import {
    media,
    isPhone,
    isTablet,
} from '../../utils/css-utils';
import { WebpurpleStampIcon } from '../icons';

import posts, { tags } from './posts-stub';

const gutter = isTablet() ? 30 : 75; // space between cards

const Container = styled(({ children, className }) => (
    isPhone()
        ? <ul className={className}>{children}</ul>
        : <Masonry className={className} elementType="ul" options={{ gutter, fitWidth: true }}>{children}</Masonry>
)) `list-style: none;
    padding: 0;
    margin: 3.6rem auto 0;
    ${media.desktop`margin-top: 10rem;`}`;


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

const PostsList = ({ theme, posts }) => (
    <Container>
        {posts.map((post, postIndex) => (
            <Post key={post._id}>
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
                {post.author ? <AuthorBadge>
                    <AuthorPhoto src={post.author.vkPhotoUrl} />
                    {post.author.displayName}
                </AuthorBadge> : ''}
                <TagList tags={tags} />
            </Post>
        ))}
    </Container>
);

const propTypes = {
    theme: React.PropTypes.object,
    posts: React.PropTypes.instanceOf(List).isRequired,
};

export default compose(
    withTheme,
    setPropTypes(propTypes),
)(PostsList);

