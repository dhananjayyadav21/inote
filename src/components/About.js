import React from "react";

const About = () => {
  return (
    <>
      <div className="my-5">
        <section class="hero-section text-center ">
          <h1 class="hero-title">Welcome to iNoteDocar</h1>
          <p class="hero-description fw-bold">
            Your personal cloud-based notebook. Create, edit, and manage your
            notes securely from anywhere.
          </p>
        </section>
      </div>

      <div>
        <section class="features-section container">
          <h2 class="features-title text-center my-4">Why Choose iNoteDocar?</h2>
          <div class="row text-center">
            <div class="col-md-4 mb-4">
              <div class="card feature-card">
                <div class="card-body">
                  <i class="feature-icon bi bi-cloud"></i>
                  <h5 class="card-title mt-3">Cloud Storage</h5>
                  <p class="card-text">
                    Access your notes from any device with secure cloud
                    synchronization.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card feature-card">
                <div class="card-body">
                  <i class="feature-icon bi bi-pencil-square"></i>
                  <h5 class="card-title mt-3">Easy Note Management</h5>
                  <p class="card-text">
                    Create, edit, and delete your notes effortlessly with a
                    user-friendly interface.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card feature-card">
                <div class="card-body">
                  <i class="feature-icon bi bi-lock-fill"></i>
                  <h5 class="card-title mt-3">Secure Authentication</h5>
                  <p class="card-text">
                    Your notes are protected with modern authentication methods
                    and encryption.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
             
            </div>

            <div class="col-md-4 mb-4">
              <div class="card feature-card">
                <div class="card-body">
                  <i class="feature-icon bi bi-lock-fill"></i>
                  <h5 class="card-title mt-3">User Details</h5>
                  <p class="card-text">
                    Show user details.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default About;
