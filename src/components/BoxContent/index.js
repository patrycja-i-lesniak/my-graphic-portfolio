import styled from 'styled-components';
import cards from 'assets/cards.png';
import logos from 'assets/logos.png';
import baners from 'assets/baners.png';
import web1 from 'assets/web1.png';
import web2 from 'assets/web2.png';
import others from 'assets/others.png';



const Wrapper = styled.div`
width: 900px;
margin: 120px auto;
`

const Header = styled.h1`
width: 60vw;
  font-size: 30px;
  font-weight: 300;
  color: grey;
  margin: 70px auto 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.gold};
  /* text-shadow: -2px 1px 5px rgba(0, 0, 0, 0.2); */
`;
const Box = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  gap: 20px;
`;

const Image = styled.img`
max-width: 800px;
`;

const BoxContent = () => (
  <Wrapper>
    <Header>wizytówki</Header>
    <Box>
      <Image src={cards} alt="" />
    </Box>
    <Header>logo</Header>
    <Box>
      <Image src={logos} alt="" />
    </Box>
    <Header>banery</Header>
    <Box>
      <Image src={baners} alt="" />
    </Box>
    <Header>strony internetowe</Header>
    <Box>
      <Image src={web1} alt="" />
      <Image src={web2} alt="" />
    </Box>
    <Header>inne</Header>
    <Box>
      <Image src={others} alt="" />
    </Box>
  </Wrapper>
);

export default BoxContent