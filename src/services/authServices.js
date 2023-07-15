import axios from "axios";

const URL_ROOT = "https://dwfs16-m3s21-ejercicio-auth.onrender.com/api/auth";

const loginService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/login`, form);
  return resp;
};

export { loginService };
