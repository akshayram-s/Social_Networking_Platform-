import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const a = localStorage.getItem("user");
const b = JSON.parse(a);
var search;
export default function Search() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);

  let submitHandler = async (values) => {
    search = values.search;
    console.log("search" + search);
    // const ques = await axios.get("http://localhost:5000/Home/"+values.search);
    // setArr(ques.data);
    await FetchQuesData(search);
  };
  const FetchQuesData = async (sch) => {
    const q = await axios.get("http://localhost:5000/search/" + sch.trim());
    console.log(q);
    setArr(q.data);
  };
  function Handler(id) {
    navigate("/postans", {
      state: {
        questionid: id,
      },
    });
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "goldenrod" }}
      >
        <div className="container">
          <Link className="navbar-brand">
            <img
              itemID="MDB-logo"
              src="logo.jpeg"
              alt="MDB Logo"
              draggable="false"
              height="60"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse"
            itemID="navbarSupportedContent"
          >
            <Formik onSubmit={submitHandler} initialValues={{ search: " " }}>
              <Form className="d-flex align-items-center w-100 form-search">
                <Field
                  className="form-control"
                  name="search"
                  type="text"
                ></Field>

                <div className="card-footer">
                  <button
                    type="submit"
                    name="search"
                    className="btn btn-primary"
                  >
                    Search
                  </button>
                </div>
              </Form>
            </Formik>
            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <Link to="/home" className="nav-link d-flex align-items-center">
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
                <Link
                  to={"/post/" + b.data}
                  className="nav-link d-flex align-items-center"
                >
                  POST
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
      {arr.map((el) => (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="media g-mb-30 media-comment">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">{el.userID}</h5>
                </div>

                <p> {el.question}</p>
              </div>
            </div>
            <a
              class="bn3637 bn36"
              onClick={() => {
                Handler(el._id);
              }}
            >
              Click here to answer
            </a>
          </div>

          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0"></h5>
                </div>

                <div>
                  {" "}
                  {el.answer.map((dat) => {
                    return (
                      <>
                        {" "}
                        <p>{dat}</p>
                        <ul className="list-inline d-sm-flex my-0">
                          <li className="list-inline-item g-mr-20">
                            <a
                              className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                              href="#!"
                            >
                              <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                              VOTES
                            </a>
                          </li>
                        </ul>
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/*<p>{ans.map((dat)=>{<p>
if(el._id==dat.questionid) {dat.answer}</p>
})}</p>*/
