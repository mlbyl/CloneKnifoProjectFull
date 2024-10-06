import { useNavigate } from "react-router-dom";
import styles from "./AllProducts.module.css";
import "@fontsource/poppins/600.css";

const AllProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container my-5 ">
      <ul className="row list-unstyled">
        {products.map((product) => (
          <li key={product.id} className="col-6 col-md-4 d-flex flex-column align-items-center mb-4">
            <div onClick={() => handleNavigation(product.id)} style={{ cursor: "pointer" }}>
              <img
                className={styles.Image}
                src={product.Images[0]?.url}
                alt={product.name}
              />
            </div>
            <div className="d-flex flex-column  mt-3">
              <span className={styles.imageName}>{product.name}</span>
              <span className={styles.imagePrice}>${product.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
