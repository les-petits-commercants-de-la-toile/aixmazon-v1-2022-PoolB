import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";

const Header = () => {
  return (
    <Wrapper>
       <img src="/aixmazon.png" alt="Aixmazon" width={189} height={60} />
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
`;
