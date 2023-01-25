import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeletePage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .delete(
          `https://63ce6b066d27349c2b6cf20a.mockapi.io/teachers/${teacherId}`
        )
        .then(() => navigate("/teachers"));
    };
    getData();
  }, [teacherId]);
  return (
    <div className="page-container">
      <div className="info">
        <h1> User Deleted Successfully</h1>
      </div>
    </div>
  );
};

export default DeletePage;
