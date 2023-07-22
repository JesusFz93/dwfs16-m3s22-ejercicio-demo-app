import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductsPage = () => {
  const { getProducts, products } = useContext(ProductContext);

  const handleClick = async () => {
    await getProducts();
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
