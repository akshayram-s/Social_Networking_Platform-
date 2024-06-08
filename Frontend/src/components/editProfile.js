import { Formik, Field, Form } from "formik";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

const a = localStorage.getItem("user");
const b = JSON.parse(a);
export default function EditProfile() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const fetchUserData = async () => {
    const a = await axios.get("http://localhost:5000/Profile/" + b.data);
    setArr(a.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  const submitHandler = async (values, setSubmitting) => {
    await axios.put("http://localhost:5000/Profile/" + b.data, values);
    navigate("/Profile/" + b.data);
  };

  return (
    <body>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "goldenrod" }}
        >
          <div className="container">
            <Link className="navbar-brand"></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              itemID="navbarSupportedContent"
            >
              <Formik>
                <Form className="d-flex align-items-center w-100 form-search">
                  <div className="input-group"></div>
                  <a className="text-white">
                    <i className="fas fa-search ps-3"></i>
                  </a>
                </Form>
              </Formik>
              <ul className="navbar-nav ms-3">
                <li className="nav-item me-3">
                  <Link
                    className="nav-link d-flex align-items-center"
                    href="#!"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/profile/" + b.data}
                    className="nav-link d-flex align-items-center me-3"
                  >
                    <i className="fas fa-bookmark pe-2"></i>PROFILE
                  </Link>
                </li>
                <li className="nav-item" style={{ width: "65px" }}>
                  <Link className="nav-link d-flex align-items-center">
                    POST
                  </Link>
                </li>
                <li className="nav-item" style={{ width: "85px" }}>
                  <Link className="nav-link d-flex align-items-center">
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              ></img>
              <span className="font-weight-bold">{arr.name}</span>
              <span className="text-black-50">{arr.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Edit</h4>
              </div>
              <Formik
                onSubmit={submitHandler}
                initialValues={{ category: "", about: "" }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Category</label>
                        <Field
                          name="category"
                          id="category"
                          type="text"
                          className="form-control"
                          placeholder="category"
                        />
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div className="col-md-6">
                        <label className="labels">
                          About
                          <br />
                        </label>
                        <Field
                          name="about"
                          id="about"
                          cols="30"
                          rows="3"
                          placeholder="Your Bio"
                        ></Field>{" "}
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <button
                        to="/profile"
                        className="btn btn-primary profile-button"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Save Profile
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
