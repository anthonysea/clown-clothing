import React from 'react';

import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
    // console.log(`${match.url}${linkUrl}`)

    return (
      <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <BackgroundImageContainer
          imageUrl={imageUrl}
        ></BackgroundImageContainer>
        <ContentContainer>
          <TitleContainer>{title.toUpperCase()}</TitleContainer>
          <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
      </MenuItemContainer>
    );
}

export default withRouter(MenuItem);