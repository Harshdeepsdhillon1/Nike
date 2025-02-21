import React, { useState } from "react";
import "../../css/stores.css";

const Stores = () => {
  const [formData, setFormData] = useState({
    country: "",
    province: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Finding stores in:", formData);
  };

  return (
    <div className="stores-container">
      <div className="stores-form-container">
        <h2>Find a Nike Store Near You</h2>
      </div>
    </div>
  );
};

export default Stores;
