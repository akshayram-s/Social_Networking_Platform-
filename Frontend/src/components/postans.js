import { Field,Form,Formik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom"
import React, {  useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate} from 'react-router';
export default function Postans(){
  

  const a=JSON.parse(localStorage.getItem("user"));
  //alert(a);
  const location=useLocation();
  const Navigate=useNavigate();
  
  let submitHandler=async(values)=>{
    console.log(location.state.questionid);
    await axios.post('http://localhost:5000/answer/'+a.data+"/"+location.state.questionid,values);
    alert("Posted answer");
 Navigate('/home')
  }
  
  
    return(
        <div><nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"goldenrod"}}>
        <div className="container">
        <Link className="navbar-brand" 
          >
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
          <div className="collapse navbar-collapse" itemID="navbarSupportedContent">
            <Formik>
            <Form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <br />
                <Field
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a className="text-white"
                ><i className="fas fa-search ps-3"></i></a>
            </Form>
            </Formik>
            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <Link to="/home" className="nav-link d-flex align-items-center" href="#!">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link d-flex align-items-center me-3" >
                  <i className="fas fa-bookmark pe-2"></i>PROFILE
                </Link>
              </li>
              <li className="nav-item" style={{width: "65px"}}>
                <Link className="nav-link d-flex align-items-center">POST</Link>
              </li>
              <li className="nav-item" style={{width: "85px"}}>
                <Link to="/about" className="nav-link d-flex align-items-center">ABOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav><div class="container padding-bottom-3x mb-2">
    <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <Formik onSubmit={submitHandler} initialValues={{answer: "" }}>
        <Form>
      <div class="form-group">
       
      </div>
            <br/><br/>
            <p>Post Your Answer Here</p>
            
            <div className="card mt-4">
                <div className="card-body">
                    <div className="form-group">
                        <label for="enter-your-question">Enter Your Answer</label>
                        <Field className="form-control" name="answer" type="text" ></Field>
       
                    </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" type="submit">Upload</button>  
                </div></div>
            </Form></Formik>
        </div>
    </div>
</div></div>)
}