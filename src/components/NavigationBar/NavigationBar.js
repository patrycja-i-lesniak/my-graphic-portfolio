import logo from 'assets/logo.png';
import styled from 'styled-components';


const StyledWrapper = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  grid-template-columns: 1fr;
  padding: 0;
  height: 80px;
  z-index: 9999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;
const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 0;
  }
`;

// const activeClassName = 'active';

// const StyledItem = styled.li.attrs(() => ({ activeClassName }))`
//   padding: 0 0 10px 0;
//   list-style: none;
//   text-decoration: none;
//   font-size: 1.7rem;
//   color: ${({ theme }) => theme.colors.grey};
 

  /* @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  } */

  /* &.${activeClassName} {
    font-weight: 700;
  } */
// `;


const StyledLogoLink = styled.div`
  display: block;
  width: 250px;
  height: 68px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;


const NavigationBar = () => (
  <StyledWrapper>
    <StyledLinkList>
      <StyledLogoLink to="/" />
      {/* <StyledItem>
         wizytówki
      </StyledItem>
      <StyledItem>banery</StyledItem>
      <StyledItem>inne</StyledItem> */}
    </StyledLinkList>
  </StyledWrapper>
);

export default NavigationBar;
