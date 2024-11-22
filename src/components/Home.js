import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container col-7 my-4">
        <h2 className="mt-2 mb-5">Add New Note </h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Note Title
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Here Enter Your Note Title.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Note Description
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Here Enter Your Note Description.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Note #Tag
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
           Create
          </button>
        </form>
        <h2></h2>
        </div>
      
      </div>
    </>
  );
};

export default Home;
