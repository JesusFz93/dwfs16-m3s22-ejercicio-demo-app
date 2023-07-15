import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <>
      <AuthState>
        <AppRouter />
      </AuthState>
    </>
  );
};

export default App;
