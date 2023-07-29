import { useReducer, useCallback } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import PropTypes from "prop-types";

import {
  loginService,
  registerService,
  renewTokenService,
} from "../services/authServices";

const initialState = {
  user: {},
};

const AuthState = ({ children }) => {
  const [globalState, dispatch] = useReducer(authReducer, initialState);

  const iniciarSesion = async (form) => {
    try {
      const resp = await loginService(form);

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const registrarUsuario = async (form) => {
    try {
      const resp = await registerService(form);

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const renewToken = useCallback(async () => {
    try {
      const resp = await renewTokenService();

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {},
    });

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user: globalState.user,
        iniciarSesion,
        logout,
        registrarUsuario,
        renewToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.node,
};

export default AuthState;
