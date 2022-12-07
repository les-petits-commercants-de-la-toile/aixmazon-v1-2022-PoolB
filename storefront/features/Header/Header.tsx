import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Image src="/aixmazon.png" alt="Aixmazone" width={189} height={60} />
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
`;
