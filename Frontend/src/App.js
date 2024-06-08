//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import Login from "./components/login";
import SignUp from "./components/Signup";
import Home from "./components/home";
import Profile from "./components/Profile";
import EditProfile from "./components/Editprofile";
import About from "./components/about";
import Post from "./components/post";
import Postans from "./components/postans";
import Search from "./components/search";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />         
        <Route path="/profile/:id" element={<Profile />}/> 
        <Route path="/editprofile/:username" element={<EditProfile />}/>  
        <Route path="/about" element={<About />}/>   
        <Route path="/post/:id" element={<Post />}/>   
        <Route path="/postans" element={<Postans />}/>
        <Route path="/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


