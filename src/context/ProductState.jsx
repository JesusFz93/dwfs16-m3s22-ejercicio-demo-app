import { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";

import {
  getProductsService,
  getProductService,
} from "../services/productServices";

const initialState = {
  products: [],
  product: {},
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    const response = await getProductsService();

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: response.data.data,
    });
  };
  const getProduct = async (id) => {
    const response = await getProductService(id);

    dispatch({
      type: "OBTENER_PRODUCTO",
      payload: response.data.data,
    });
  };

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
