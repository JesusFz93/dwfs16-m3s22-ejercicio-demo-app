import Header from "../components/Header";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header title="Peril de usuario" />
      <main className="row">
        <article className="col">
          <h2>{user.user_name}</h2>
          <p>{user.id}</p>
        </article>
      </main>
    </>
  );
};

export default ProfilePage;
