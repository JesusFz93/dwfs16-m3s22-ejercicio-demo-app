import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const App = () => {
  return (
    <>
      <AuthState>
        <PayPalScriptProvider
          options={{
            "client-id":
              "ARx4d5eWP-JPPqGpXIsVyiHxkBcjUG6KIdsB9LdRE_PrrC6kvpHpJ8FgdQpjvjEB7ZWQ3sn-fKwW0T6U",
          }}
        >
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  );
};

export default App;
