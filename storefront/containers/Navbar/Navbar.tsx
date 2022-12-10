import styled from "styled-components";
import { Button, NavHeading } from "../../components";

const Navbar = () => {
  return (
    <Wrapper>
      <NavHeading link="/"><Button>Produits</Button></NavHeading>
      <NavHeading link="/cart"><Button>Panier</Button></NavHeading>
      <NavHeading link="/checkout"><Button>Paiement</Button></NavHeading>
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
