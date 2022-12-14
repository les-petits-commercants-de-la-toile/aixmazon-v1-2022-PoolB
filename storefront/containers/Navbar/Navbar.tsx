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
display: flex;
justify-content: end;  
align-items: center;
gap: 12px;
cursor: pointer;

@media (max-width:973px) {
  display: flex;
  justify-content: center;  
  align-items: center;
  gap: 12px;
}
`;
