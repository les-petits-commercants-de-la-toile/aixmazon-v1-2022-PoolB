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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);  
  gap: 18px;

  @media (max-width:1166px) {
    grid-template-columns: repeat(3,1fr);
    width: 100%;
  }
  @media (max-width:973px) {
    width: 100%;
    display: block;
  }
`;
