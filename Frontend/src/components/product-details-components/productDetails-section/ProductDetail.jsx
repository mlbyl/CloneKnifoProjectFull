import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NotFound from "../../NotFound";
import styles from "./ProductDetails.module.css";
import { ShoppingContext } from "../../../ShoppingProviderContext";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);
  const [allImages, setAllImages] = useState(null);
  const [inputValue, setInputValue] = useState(1);

  const { handleOrderItems } = useContext(ShoppingContext);

  const [infosOfAddedProduct, setinfosOfAddedProduct] = useState({
    addedProduct: null,
    addedMainImage: null,
    addedInputValue: null,
  });
  useEffect(() => {
    setinfosOfAddedProduct({
      addedProduct: product,
      addedMainImage: mainImage,
      addedInputValue: inputValue,
    });
  }, [product, inputValue, mainImage]);

  const handleAddToCartButton = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      toast.error("Please login...");
    }
    handleOrderItems(infosOfAddedProduct);
  };

  const handleIncrease = () => {
    setInputValue((prevValue) => prevValue + 1);
  };
  const handleDecrease = () => {
    setInputValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setInputValue(value);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2345/product/productbyid/${id}`
        );
        const productData = response.data.data;
        setProduct(productData);

        const mainImg = productData.Images?.find((img) => img.isMain === true);
        if (mainImg) {
          setMainImage(mainImg.url);
        }
        const allImg = productData.Images?.map((img) => img);
        setAllImages(allImg);
      } catch (error) {
        toast.error("An error occured while fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className={styles.productMain}>
        <div className={styles.mainImage}>
          {mainImage ? (
            <img src={mainImage} alt={product.name} />
          ) : (
            <NotFound />
          )}
        </div>

        <div className={styles.productInfos}>
          <h2>{product.name}</h2>

          <div className={styles.priceBrandStock}>
            <p className={styles.productPrice}>${product.price}</p>

            <div className={styles.brandAndStock}>
              <div className={styles.productBrand}>
                <span>Brand:</span>
                <span>{product.Brand.name}</span>
              </div>

              <div className={styles.productStock}>
                <span>Availability:</span>
                {product.stock > 0 ? (
                  <span className={styles.InStock}>In Stock</span>
                ) : (
                  <span className={styles.NotInStock}>Out of Stock</span>
                )}
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.productDescription}>
            <p>{product.description}</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.cartContainer}>
            <div className={styles.quantityControl}>
              <button
                onClick={handleDecrease}
                className={styles.decreaseButton}
              >
                -
              </button>
              <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                className={styles.quantityInput}
                min="1"
                step="1"
              />

              <button
                onClick={handleIncrease}
                className={styles.increaseButton}
              >
                +
              </button>
            </div>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCartButton}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <ul className="d-flex m-0 p-0 gap-2">
        {" "}
        {allImages?.map((img) => (
          <li className={styles.ImagesList} key={img.id}>
            <img
              src={img.url}
              alt={img.name}
              onClick={() => setMainImage(img.url)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
