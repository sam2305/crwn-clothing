import { withRouter } from 'react-router-dom';
import { MenuItemContainer, MenuItemContent,
MenuItemContentSubtitle, MenuItemContentTitle,MenuItemImage } from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <MenuItemImage className='background-image' imageUrl={imageUrl} />
    <MenuItemContent className='content'>
      <MenuItemContentTitle>{title}</MenuItemContentTitle>
      <MenuItemContentSubtitle>SHOP NOW</MenuItemContentSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
