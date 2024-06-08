
import { ErrorMessage,Field,Form,Formik } from "formik";
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate} from 'react-router';

export default function Login(){
  const Navigate = useNavigate();
    const submitHandler = async(values, setSubmitting) => {
      /*const headers={
        "authorization": '9361655383:12345'
      }*/
       const user=await axios.post('http://localhost:5000/Login',values);
        //alert(user.data);
       if(user.data!="invalid"){
        localStorage.setItem('user',JSON.stringify(user));
       callhome();
       }
      else{
        alert("Invalid username or password");
      }
   
    }
      const callhome=()=>{
        Navigate('/Home');
        window.location.reload();
    }
    return( <body ><div className="wrapper" >
    <div className="logo">
      <img src="logo.jpeg"></img>
    </div>
    <div className="text-center mt-4 name" style={{textAlign: "center"}}>
       NETERN
    </div><br/><Formik onSubmit={submitHandler}
      initialValues={{userID:"" ,password:""}}>
        
    <Form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <Field type="text" name="userID" id="userName" placeholder="Username" />
            <ErrorMessage name="userID" component="div"/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <Field type="password" name="password" id="pwd" placeholder="Password" />
            <ErrorMessage name="password" component="div"/>
        </div>
        <button className="btn mt-3" type="submit" >Login</button>
    </Form></Formik>
    <div className="text-center fs-6">
         <Link to="/Signup">Sign up</Link>
    </div>
</div></body>);
}