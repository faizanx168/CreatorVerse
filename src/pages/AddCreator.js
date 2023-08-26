import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import "./EditCreator.css";
function AddCreator() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("creators").insert([
        {
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL,
        },
      ]);
      if (error) {
        console.error("Error adding creator:", error);
      } else {
        console.log("Creator added:", data);
        Navigate("/");
      }
    } catch (error) {
      console.error("Error adding creator:", error.message);
    }
  };

  return (
    <div className="edit-creator-container">
      <h1>Add New Creator</h1>
      <div className="edit-creator-form">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />

          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleFormChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
          ></textarea>

          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleFormChange}
          />

          <button type="submit" className="update-button">
            Add Creator
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCreator;
