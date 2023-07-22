import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const CartPage = () => {
  const { cart } = useContext(ProductContext);

  const handleDeleteProduct = (id) => {
    console.log(id);
  };
  return (
    <main className="row">
      <article className="col">
        {cart.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt={item.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">{item.price}</small>
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      Eliminar del carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default CartPage;
