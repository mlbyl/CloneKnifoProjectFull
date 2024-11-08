import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./User.module.css";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { AuthContext } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const User = () => {
  const navigate = useNavigate();

  const { auth, logout } = useContext(AuthContext);

  const token = localStorage.getItem("token")

  const handleLogout = () => {
    logout();
    navigate("/userprofile");
  };

  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/userbyid/`,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          }        );
        setUserData(response.data.data);
      } catch (error) {
        toast.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [userData]);

  const formik = useFormik({
    initialValues: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      password: "",
    },
    enableReinitialize: true,
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
        .min(8, "Password must be at least 8 characters long")
        .max(64, "Password maximum 64 characters long")
        .matches(/[a-zA-Z]/, "Password must include at least one letter")
        .matches(/\d/, "Password must include at least one number.")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must include at least one special character."
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
        const response = await axios.put(
          `http://localhost:2345/user/update/`,
          user,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:`Bearer ${token}`
            },
          }
        );
        setMessage("User updated successfully");
        toast.success("User updated successfully")
        setIsEditing(false);
        setUserData(response.data);
      } catch (error) {
        toast.error("Error while updating user", error);
      }
    },
  });

  return (
    <form
      className={`d-flex flex-column justify-content-center align-items-center gap-2 ${styles.form}`}
      onSubmit={formik.handleSubmit}
    >
      <h2>Welcome {userData.firstname}!</h2>
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.inputContainer}`}
      >
        <label htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={isEditing ? formik.values.firstname : userData.firstname}
          disabled={!isEditing}
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
          value={isEditing ? formik.values.lastname : userData.lastname}
          disabled={!isEditing}
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
          disabled={!isEditing}
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
          value={isEditing ? formik.values.email : userData.email}
          disabled={!isEditing}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <div className="d-flex flex-column pt-5">
          {isEditing ? (
            <div className="d-flex flex-column gap-2">
              <button type="submit">Update</button>
              <button type="button" className="text-bg-danger" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              <button
                className="fw-semibold"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button
                className="d-flex gap-2 justify-content-center align-items-center text-bg-danger fw-semibold"
                type="button"
                onClick={handleLogout}
              >
                Log Out
                <IoLogOutOutline />
              </button>
            </div>
          )}
        </div>
      </div>
      {message && <div>{message}</div>}
    </form>
  );
};

export default User;
