import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./EditCreator.css";
function EditCreator() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    async function fetchCreatorFromDatabase() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
        setFormData({
          name: data.name,
          url: data.url,
          description: data.description,
          imageURL: data.imageURL || "",
        });
      }
    }

    fetchCreatorFromDatabase();
  }, [id]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("creators")
        .update({
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL,
        })
        .eq("id", id);
      if (error) {
        console.error("Error updating creator:", error);
      } else {
        console.log("Creator updated:", data);
        Navigate("/");
      }
    } catch (error) {
      console.error("Error updating creator:", error.message);
    }
  };

  if (!creator) {
    return <div>Loading...</div>;
  }
  const handleDelete = async () => {
    try {
      const { error } = await supabase.from("creators").delete().eq("id", id);
      if (error) {
        console.error("Error deleting creator:", error);
      } else {
        console.log("Creator deleted:", id);
        Navigate("/");
      }
    } catch (error) {
      console.error("Error deleting creator:", error.message);
    }
  };

  return (
    <div className="edit-creator-container">
      <h1>Edit {creator.name}</h1>
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
            Update Creator
          </button>
        </form>
        <button onClick={handleDelete} className="delete-button">
          Delete Creator
        </button>
      </div>
    </div>
  );
}

export default EditCreator;
