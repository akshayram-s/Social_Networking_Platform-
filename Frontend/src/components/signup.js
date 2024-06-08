import { ErrorMessage,Field,Form,Formik } from "formik";
import axios  from "axios";
import { Link } from "react-router-dom"


export default function SignUp(){
  
    const submitHandler = async(values, setSubmitting) => {
       await axios.post("http://localhost:5000/Signup",values)
        alert(JSON.stringify(values));
        // setSubmitting(false);
      };
      const validator=(values)=>{
        const errors = {};

        if (!values.name) {
          errors.name = "Required";
        }
       
        if (!values.userID) {

            errors.userID = "Required";
          }

        if (!values.email) {
          errors.email = "Required";
        } else if (
         values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
        ) {
          errors.email = "Invalid email address";
        }
        if (values.password.length<8) {
          errors.password = "Password should contain at least 8 characters";
        }
        if(values.password!==values.conpassword){
          errors.conpassword = "Confirm Password not same ";  
        }
        return errors;
      };
    return( <body> <div className="wrapper" >
    <div className="logo"><br/><br />
    <img src="logo.jpeg"></img>
    
    </div>
    <div className="text-center mt-4 name" style={{textAlign: "center"}}>
       <br/> NETERN
    </div><br/><Formik onSubmit={submitHandler}
      initialValues={{ name:"",userID:"",email:"",password:"",conpassword:"" }} validate={validator}>
        {({ isSubmitting }) => (
    <Form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <Field type="text" name="name" id="userName" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <Field type="text" name="userID" id="UserID" placeholder="UserID" />
            <ErrorMessage name="userID" component="div" />
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <Field type="email" name="email" id="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
        </div>
        
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <Field type="password" name="password" id="pwd" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <Field type="password" name="conpassword" id="conpwd" placeholder="Confirm Password" />
            <ErrorMessage name="conpassword" component="div" />
        </div>
        <button className="btn mt-3" type="submit" disabled={isSubmitting}>Sign Up</button>
    </Form>)}</Formik>
    <div className="text-center fs-6">
         <Link to="/">Login</Link>
    </div>
</div></body>)
}
