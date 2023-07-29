import PropTypes from "prop-types";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import ProductContext from "../context/ProductContext";

// This values are the props in the UI
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypalCheckoutButton = ({ currency, amount, showSpinner }) => {
  const navigate = useNavigate();
  const { vaciarCarrito } = useContext(ProductContext);
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  // sb-wv9lr20565334@personal.example.com
  // pn2XFFw.

  // sb-zkefr20761979@business.example.com
  // #rBfc0W?

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              console.log("Orden de conora: " + orderId);
              return orderId;
            });
        }}
        onApprove={async function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            console.log("Compra realizada");
            console.log(data);
            vaciarCarrito();
            navigate("/products");
          });
        }}
      />
    </>
  );
};

PaypalCheckoutButton.propTypes = {
  currency: PropTypes.string.isRequired,
  showSpinner: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
};

export default PaypalCheckoutButton;
