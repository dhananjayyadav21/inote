import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Userdetails = () => {
  //navigate page
  const navigate = useNavigate();

  useEffect(() => {
    //if user note login
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [user, setUser] = useState({ name: "", email: "", Date: "", id: "" });
  //   setUser({name:json.name, email:json.email, Date:json.Date, id:json._id})

  //get user from db ==============================================================================================
  const getUser = async () => {
    //API CALL
    try {
      const responce = await fetch(`http://localhost:5000/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await responce.json();
      setUser({
        name: json.name,
        email: json.email,
        Date: json.Date,
        id: json._id,
      });
      console.log(json);
      //if accured error
    } catch (err) {
      console.log(err);
    }
  };

  //handle handleonchange function of the form
  const handleonchange = (e) => {};

  const handleDelete = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <>
      <div className="container row d-flex py-5 px-5 justify-content-center">
        <div className="form-container rounded-4 shadow col-md-8 col-11  py-5 px-5 my-5">
          <h2 className="text-center mb-4">Your Profile </h2>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleonchange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleonchange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                User id
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={user.id}
                onChange={handleonchange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                Join Date
              </label>
              <input
                type="tel"
                className="form-control"
                id="Date"
                name="Date"
                value={user.Date}
                onChange={handleonchange}
                required
              />
            </div>
          </form>
        </div>


        <div className="col-md-4  col-11 my-5">
          <div className="container shadow rounded-4 py-3 px-3">
            <h6 className="fw-bold mb-4">Delete Account</h6>
            <p>
              You will lose access to your iNoteDocar account once your deletion
              request has been submitted.
            </p>
            <div className="mt-4 modal-footer">
              <button className="btn btn-danger " onClick={handleDelete}>Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdetails;
