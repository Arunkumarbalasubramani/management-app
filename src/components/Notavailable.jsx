import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Notavailable = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div class="page-container">
        {/* 404 Error Text  */}
        <div className="not-available-page">
          <div class="text-center">
            <h1 data-text="404">404</h1>
            <h2>Page Not Found</h2>
            <h3 class="text-gray-500 mb-0">
              It looks like you found a glitch in the matrix...
            </h3>
            <h5>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                &larr; Back to HomePage
              </Nav.Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notavailable;
