import { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";

const initialState = {
  products: [],
  product: {},
};

const ProductState = ({ children }) => {
  const [globalState] = useReducer(productReducer, initialState);

  const getProducts = () => {};
  const getProduct = () => {};

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        product: globalState.product,
        getProducts,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
