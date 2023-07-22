import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { getProducts, products } = useContext(ProductContext);

  const handleClick = async () => {
    await getProducts();
  };

  const handleAddProduct = (id) => {
    console.log(id);
  };

  return (
    <>
      <main className="row">
        <article className="col">
          <button type="button" onClick={handleClick}>
            Obtener productos
          </button>
        </article>
      </main>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg"
                    onClick={() => handleAddProduct(product.id)}
                  >
                    <i className="bi bi-cart-plus" />
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-lg"
                  >
                    <i className="bi bi-box-seam" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
