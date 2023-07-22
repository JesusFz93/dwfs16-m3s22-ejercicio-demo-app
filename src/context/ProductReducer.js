const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        products: action.payload,
      };

    case "OBTENER_PRODUCTO":
      return {
        ...globalState,
        product: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
