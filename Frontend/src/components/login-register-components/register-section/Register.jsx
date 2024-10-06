import axios from "axios";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";


const Register = () => {

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {login}=useContext(AuthContext)


  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Firstname must be at least 3 characters long")
        .max(50, "Firstname maximum 50 characters long")
        .required("Firstname is required"),
      lastname: Yup.string()
        .min(3, "Lastname must be at least 3 characters long")
        .max(50, "Lastname maximum 50 characters long")
        .required("Lastname is required"),
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
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:2345/user/register",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
       
        setMessage("Data added successfully");
        if (response.data && response.data.data && response.data.data.token) {
          login( response.data.data.token);
        }
        navigate("/userprofile");
      } catch (error) {
        console.log("Error while adding user", error);
      }
    },
  });

  return (
    <form
      className={`d-flex flex-column justify-content-center align-items-center gap-2 ${styles.form}`}
      onSubmit={formik.handleSubmit}
    >
      <h2>Register as a User</h2>
      <div
        className={`d-flex flex-column  justify-content-center align-items-center  ${styles.inputContainer}`}
      >
        <label htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div style={{ color: "red" }}>{formik.errors.firstname}</div>
        ) : null}

        <label htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div style={{ color: "red" }}>{formik.errors.lastname}</div>
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

        <div className="d-flex flex-column pt-5">
          <button type="submit">Register</button>
          <span>
            Already have an Account? <Link to="/login">Log in</Link>
          </span>
        </div>
      </div>
      {message && <div>{message}</div>}
    </form>
  );
};

export default Register;
