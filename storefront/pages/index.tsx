import { GetStaticProps } from "next";
import { fetchProducts } from "../utils/wooCommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";
import { ProductGrid } from "../features";
import { NavLayout } from "../layout";

// declare types for the functional component props //
interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  // console.log("--WooCommerce Products: ", products);

  return (
    <NavLayout title="Menu" description="Menu page">
        <h3>Casquette swag</h3>
        <img src="https://drive.google.com/file/d/1AmhyNX4wlfvf_X9fzG-XppWrR3Buqlx2/view?usp=share_link"></img>
        <a href="https://buy.stripe.com/9AQeV86cL4yhcLuaEE" target="_blank"><button type="button">Acheter</button></a>
    </NavLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
