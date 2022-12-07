import { Fragment } from "react";
import styled from "styled-components";
import { CartHeader, CTA } from "../../components";
import { CartItem, CartSummary } from "../../containers";
import { LineItem } from "../../utils/types/wooCommerceTypes";
import { useRouter } from "next/router";

interface Props {
  lineItems: LineItem[];
}

function calculateCartTotal(lineItems: LineItem[]) {
  if (!lineItems.length) return "0.00€";

  const totalsArray = lineItems.map((lineItem) => {
    return parseFloat(lineItem.price!) * 100 * lineItem.quantity;
  });
  const total = totalsArray.reduce((prev, next) => prev + next);
  const formattedTotal = `${(total / 100).toFixed(2)}€`;
  return formattedTotal;
}

const Cart = (props: Props) => {
  const { lineItems } = props;
  const router = useRouter();

  const createCart = (lineItems: LineItem[]) => {
    return (
      <Fragment>
        <CartHeader />
        {lineItems.map((lineItem) => {
          return <CartItem lineItem={lineItem} key={lineItem.product_id} />;
        })}
        <CartSummary lineItems={lineItems} />
        <CTA onClickFunction={() => router.push("/checkout")}>PAYER {calculateCartTotal(props.lineItems)}
        </CTA>
      </Fragment>
    );
  };

  return (
    <Wrapper>
      {!lineItems.length ? (
        <Message>
          <p>Désolé, votre panier est vide !</p>
        </Message>
      ) : (
        createCart(lineItems)
      )}
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
