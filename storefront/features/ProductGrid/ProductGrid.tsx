import styled from "styled-components";
import { Product } from "../../utils/types/wooCommerceTypes";
import { ProductCard } from "../../containers";

interface Props {
  products: Product[];
}

const ProductGrid = (props: Props) => {
  const { products } = props;

  return (
    <Grid>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  gap: 18px;
  @media (max-width:1132px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;

  }

  @media (max-width:973px) {
    width: 70vw;
    display: block;

  }
`;
