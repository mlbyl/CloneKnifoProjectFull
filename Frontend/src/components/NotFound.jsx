import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { GoHome } from "react-icons/go";
const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5 gap-3">
      <h1 className={styles.header}>404 - Page Not Found</h1>
      <p className={styles.paragraph}>
        Page doesnt exists.
      </p>
      <Link to="/" className={styles.link}>
        Go Back Home
        <GoHome size={25}/>
      </Link>
    </div>
  );
};

export default NotFound;
