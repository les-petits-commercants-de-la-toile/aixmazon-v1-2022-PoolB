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

    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr;
  gap: 16px;
`;
