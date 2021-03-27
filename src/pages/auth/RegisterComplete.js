import React, { useState,useEffect} from "react";
import {auth} from '../../firebase';
import {toast} from 'react-toastify';

//import { Toast } from "react-toastify/dist/components";


const RegisterComplete = ({history}) => {
  const [email, setEmail] = useState("");
const [password,setPassword] = useState('')

useState(() => {
    console.log.apply(window.localStorage.getItem('emailForRegistration'))
},[])
//props.history


  const handleSubmit = async (e) => {
    e.preventDefault()

    

  };

  const CompleteRegistrationForm = () => (

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
         
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
