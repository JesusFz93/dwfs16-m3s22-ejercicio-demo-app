import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const initForm = {
  user_name: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);

  const { user, registrarUsuario } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await registrarUsuario(form);

    setForm(initForm);
  };

  return (
    <>
      <header className="row col">
        <h1>Register Page</h1>
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
              Crear cuenta
            </button>
          </form>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </article>
      </section>
    </>
  );
};

export default RegisterPage;
