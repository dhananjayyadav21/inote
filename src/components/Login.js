import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [Creditials, setCreditials] = useState({email:"", password:""});
  const navigate = useNavigate();

  const handlesumbit = async(e)=>{
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/login"
    try {
      //API CALL
      const responce = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({email:Creditials.email,password:Creditials.password})
      });
      const json = await responce.json();
      console.log(json);

      if(json.success){
        //save the auth token and redirect
        localStorage.setItem("token", json.authToken)
        navigate('/');
      }
      //accuerd error 
    } catch (error) {
      console.error(error.message);
    }
  }

  const onchange =(e)=>{
    setCreditials({...Creditials, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div>
        <div className="container rounded border border-dark border-2 mt-5 py-5 px-5 col-5">
          <h3 className="mb-4">Login With Creditials</h3>
          <form onSubmit={handlesumbit}> 
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address </label>
              <input type="email" className="form-control" id="email" name="email" onChange={onchange} value={Creditials.email} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" onChange={onchange} value={Creditials.password}/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="checkbox"  />
              <label className="form-check-label" htmlFor="checkbox">Check me out </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
