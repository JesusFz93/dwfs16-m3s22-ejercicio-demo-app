import axios from "axios";

// const URL_ROOT = "https://dwfs16-m3s21-ejercicio-auth.onrender.com/api/auth";
// const URL_ROOT = "http://localhost:4000/api/auth";
const URL_ROOT = "https://dwfs16-m3s21-ejercicio-auth.onrender.com/api/auth";

const loginService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/login`, form);
  return resp;
};

const registerService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/register`, form);
  return resp;
};

const renewTokenService = async () => {
  const resp = await axios.get(`${URL_ROOT}/renew`, {
    headers: {
      "x-token": localStorage.getItem("token"),
    },
  });
  return resp;
};

export { loginService, registerService, renewTokenService };
