import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">Aixmazone</Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`


`;
