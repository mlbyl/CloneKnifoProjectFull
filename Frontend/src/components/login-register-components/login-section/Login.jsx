import axios from "axios";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password at least 8 characts long.")
        .max(64, "Password maximum 64 characters long.")
        .matches(/[a-zA-Z]/, "Password must includes at least one letter")
        .matches(/\d/, "Password must includes at least one number.")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must includes at least one special characters."
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:2345/user/login",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setMessage("Login successful!");
        toast.success("Login successfull!")
        navigate("/userprofile");
        if (response.data && response.data.data && response.data.data.token) {
          login(response.data.data.token);
        }
      } catch (error) {
        setMessage("Error during login: " + error.response.data.message);
       toast.error(error.response.data.message);
      }
    },
  });

  return (
    <form
      className={`d-flex flex-column justify-content-center align-items-center gap-2 ${styles.form}`}
      onSubmit={formik.handleSubmit}
    >
      <h2>Log in as a User</h2>
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.inputContainer}`}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}

        <div className="d-flex flex-column pt-5">
          <button type="submit">Log in</button>
          <span>
            Haven't yet an Account? <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
      
    </form>
  );
};

export default Login;
