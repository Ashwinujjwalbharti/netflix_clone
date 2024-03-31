import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useUser } from "../context/user";
import toast from "react-hot-toast";
import "../assets/css/Navbar.css";


function Navbar() {
  const [user, setUser] = useUser();
  const [show, handleShow] = useState(false);
  const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setImage(result.user.photoURL);
        setUser(result.user);
        toast.success(`Welcome ${result.user.displayName}!`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 const transitionNavbar=() =>{
  console.log(window.scrollY);
  if (window.scrollY >320) {
    handleShow(true);
  } else {
    handleShow(false);
  }
}
useEffect(() => {
    window.addEventListener("scroll",transitionNavbar);
    //to remove the eventlistener
    return () => {
      window.removeEventListener("scroll",transitionNavbar);
    };
  }, []);
 console.log(show);
  return(
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="img_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      ></img>

      <button onClick={signInWithGoogle} className="profile_logo">
        <img className="profile_logo" src={image} alt="login" />
      </button>
    </div>
  );
}

export default Navbar;
