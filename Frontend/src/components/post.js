import { Field, Form, Formik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const a = localStorage.getItem("user");
const b = JSON.parse(a);
export default function Post() {
  const navigate = useNavigate();
  let submitHandler = async (values) => {
    await axios.post("http://localhost:5000/question/" + b.data, values);
    handle();
  };
  function handle() {
    navigate("/home");
  }
  return (
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
                <a className="text-white">
                  <i className="fas fa-search ps-3"></i>
                </a>
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
                <Link
                  to="/profile"
                  className="nav-link d-flex align-items-center me-3"
                >
                  <i className="fas fa-bookmark pe-2"></i>PROFILE
                </Link>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <Link className="nav-link d-flex align-items-center">POST</Link>
              </li>
              <li className="nav-item" style={{ width: "85px" }}>
                <Link
                  to="/about"
                  className="nav-link d-flex align-items-center"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container padding-bottom-3x mb-2">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <Formik
              onSubmit={submitHandler}
              initialValues={{ category: "", question: "" }}
            >
              <Form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    <br></br>Category
                  </label>
                  <Field
                    type="text"
                    name="category"
                    className="form-control"
                    id="exampleFormControlSelect1"
                  ></Field>
                </div>
                <br />
                <br />
                <p>Post Your Questions Here</p>

                <div className="card mt-4">
                  <div className="card-body">
                    <div className="form-group">
                      <label for="enter-your-question">
                        Enter Your Question
                      </label>
                      <Field
                        className="form-control"
                        name="question"
                        type="text"
                      ></Field>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" type="submit">
                      Upload
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
