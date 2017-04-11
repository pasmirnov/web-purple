import React from 'React';
import { withTheme } from 'styled-components';

import MainContainer from '../common/main-container'
import BlockHeader from '../common/block-header';



const PostsFeed = () => (
    <MainContainer>
        <BlockHeader>Feed</BlockHeader>
    </MainContainer>
);

export default withTheme(PostsFeed);