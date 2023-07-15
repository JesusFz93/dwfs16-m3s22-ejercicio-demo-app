import { useState } from "react";
import { loginService } from "../services/authServices";

const initForm = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await loginService(form);
      // console.log(resp.data.data);
      setUser(resp.data.data);

      // setUser()
    } catch (error) {
      console.log(error.response.data);
    }

    setForm(initForm);
  };

  return (
    <>
      <header className="row col">
        <h1>Login Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesion
            </button>
          </form>
        </article>
      </main>
      <section className="row">
        <article className="col">{user.user_name}</article>
      </section>
    </>
  );
};

export default LoginPage;
