import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
const a = localStorage.getItem("user");
const b = JSON.parse(a);
export default function Profile() {
  const [arr, setArr] = useState([]);
  const fetchUserData = async () => {
    const a = await axios.get("http://localhost:5000/Profile/" + b.data);
    setArr(a.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  //alert(arr.name);
  const remove = async (a) => {
    await axios.delete("http://localhost:5000/profile/" + a);
  };
  return (
    <div>
      <>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark "
            style={{ backgroundColor: "goldenrod" }}
          >
            <div className="container">
              <Link className="navbar-brand">
                <img
                  itemID="MDB-logo"
                  src="public/logo.jpeg"
                  alt="NETERN"
                  draggable="false"
                  height="60"
                ></img>
              </Link>
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
                    <div className="input-group">
                      <br />
                    </div>
                  </Form>
                </Formik>
                <ul className="navbar-nav ms-3">
                  <li className="nav-item me-3">
                    <Link
                      to="/home"
                      className="nav-link d-flex align-items-center"
                      href="#!"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center me-3">
                      <i className="fas fa-bookmark pe-2"></i>PROFILE
                    </Link>
                  </li>

                  <li className="nav-item" style={{ width: "85px" }}>
                    <Link
                      to="/about"
                      className="nav-link d-flex align-items-center"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item" style={{ width: "85px" }}>
                    <Link to="/" className="nav-link d-flex align-items-center">
                      LOGOUT
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
                  <h4 classNeme="text-right">My Profile </h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <h5>{arr.name} </h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">User Name</label>
                    <h5>{arr.userID}</h5>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <h5>{arr.email}</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Category</label>
                    <h5>{arr.category}</h5>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <label className="labels">About</label>
                    <p>{arr.about} </p>{" "}
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <Link to={"/editprofile/" + arr.userID}>
                    <button className="btn btn-primary profile-button">
                      Edit Bio
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
