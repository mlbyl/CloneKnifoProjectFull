import { useNavigate } from "react-router-dom";
import styles from "./OurProduct.module.css";
import "@fontsource/poppins/600.css";

const OurProduct = ({ products }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container d-flex flex-column gap-5 justify-content-center align-items-center my-5">
      <h2 className={`mb-4 ${styles.Head}`}>Our product</h2>
      <ul className="d-flex flex-row gap-4 text-decoration-line-none list-unstyled">
        {products.map((product) => (
          <li key={product.id}>
            <div onClick={() => handleNavigation(product.id)} style={{ cursor: "pointer" }}>
              <img
                className={styles.Image}
                src={product.Images[0]?.url || "/path/to/fallback.jpg"}
                alt={product.name}
              />
            </div>
            <div className="d-flex flex-column gap-1 mt-3">
              <span className={styles.imageName}>{product.name}</span>
              <span className={styles.imagePrice}>${product.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProduct;
