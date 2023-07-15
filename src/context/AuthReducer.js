const reducer = (globalState, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...globalState,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...globalState,
        user: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
