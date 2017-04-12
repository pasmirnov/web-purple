import React from 'React';
import styled, { withTheme } from 'styled-components';

import {
    FilterBlock,
    Search
} from '../page-filter';
import { TagList } from '../common/tag';
import { media } from '../../utils/css-utils';
import MainContainer from '../common/main-container'
import BlockHeader from '../common/block-header';

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
const AuthorName = styled.div`
     display: flex;
`;


const PostsFeed = ({ tags, onTagClick }) => (
    <MainContainer>
        <BlockHeader>Feed</BlockHeader>
        <FilterBlock>
            <Search placeholder="Keyword..."></Search>
        </FilterBlock>
        <PostsList>
            <Post>
                <BackgroundShape>
                    <BackgroundImage url="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" />
                </BackgroundShape>
                <header>
                    <Info>
                        <time>{new Date().toLocaleDateString()}</time>
                    </Info>
                    <Info>
                        <Title>A Detailed Introduction To Webpack</Title>
                    </Info>
                </header>

                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nihil dolore adipisci, enim ex explicabo aut quasi voluptatem consequatur ipsum nemo ratione, officia at error maiores neque voluptas saepe. Laudantium.
                </Description>
                <AuthorBadge>
                    <AuthorPhoto src="https://avatars0.githubusercontent.com/u/8476552?v=3&u=a4505b0d68ce109043026727195a8fe95cfb321d&s=400" />
                    Pavel Smirnov
                </AuthorBadge>

                <TagList tags={['test', 'test', 'test']} />

            </Post>
        </PostsList>
    </MainContainer>
);

export default withTheme(PostsFeed);