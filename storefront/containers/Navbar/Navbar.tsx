import styled from "styled-components";
import { NavHeading } from "../../components";

const Navbar = () => {
  return (
    <Wrapper>
      <NavHeading link="/">Produits</NavHeading>
      <NavHeading link="/cart">Panier</NavHeading>
      <NavHeading link="/checkout">Paiement</NavHeading>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
