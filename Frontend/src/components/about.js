import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      {" "}
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
                    to="/Profile"
                    className="nav-link d-flex align-items-center me-3"
                  >
                    <i className="fas fa-bookmark pe-2"></i>PROFILE
                  </Link>
                </li>
                <li className="nav-item" style={{ width: "65px" }}>
                  <Link
                    to="/post"
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
      </div>
      <div>
        <div className="about-section paddingTB60 gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6">
                <div className="about-title clearfix">
                  <h1>
                    ABOUT <span>NETERN</span>
                  </h1>
                  <h3 style={{ color: "goldenrod" }}>
                    Connecting Professionals
                  </h3>
                  <p className="about-paddingB"></p>
                  <p>
                    Netern is a social-oriented platform that helps in providing
                    solutions to the query posted by users from different parts
                    of the world, This platform provides the perfect opportunity
                    for users to communicate, share their insights and opinions
                    with others.
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="about-img">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section ID="leadership">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-lg-2 col-lg-4">
                <div className="accordion" ID="accordionLeaders">
                  <div className="card">
                    <div className="accordion-group">
                      <div className="card-header">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordionLeaders"
                          href="#leader1"
                        >
                          <div className="media">
                            <img
                              src="http://bit.ly/2IirA9e"
                              className="mr-3 rounded-circle"
                              alt="..."
                            />
                            <div className="media-body">
                              <h5 className="mt-2">AKSHAY RAM</h5>
                              <p>CEO & Co-Founder</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        ID="leader1"
                        className="accordion-body in collapse"
                        style={{ height: "auto" }}
                      >
                        <div className="card-body">brief</div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="accordion-group">
                      <div className="card-header">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordionLeaders"
                          href="#leader2"
                        >
                          <div className="media">
                            <img
                              src="http://bit.ly/2IirA9e"
                              className="mr-3 rounded-circle"
                              alt="..."
                            />
                            <div className="media-body">
                              <h5 className="mt-2">ABILAASH</h5>
                              <p>Partner</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        ID="leader2"
                        className="accordion-body collapse"
                        style={{ height: "" }}
                      >
                        <div className="card-body">Brief</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="accordion" ID="accordionLeaders2">
                  <div className="card">
                    <div className="accordion-group">
                      <div className="card-header">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordionLeaders2"
                          href="#leader4"
                        >
                          <div className="media">
                            <img
                              src="http://bit.ly/2IirA9e"
                              className="mr-3 rounded-circle"
                              alt="..."
                            />
                            <div className="media-body">
                              <h5 className="mt-2">JONATHAN PAUL</h5>
                              <p>Partner & Co-Founder</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        ID="leader4"
                        className="accordion-body in collapse"
                        style={{ height: "auto" }}
                      >
                        <div className="card-body">Brief</div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="accordion-group">
                      <div className="card-header">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordionLeaders2"
                          href="#leader5"
                        >
                          <div className="media">
                            <img
                              src="http://bit.ly/2IirA9e"
                              className="mr-3 rounded-circle"
                              alt="..."
                            />
                            <div className="media-body">
                              <h5 className="mt-2">AKASH UNNIKRISHNAN</h5>
                              <p>Partner</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        ID="leader5"
                        className="accordion-body collapse"
                        style={{ height: "auto" }}
                      >
                        <div className="card-body">Brief</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
