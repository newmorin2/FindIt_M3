import { useState } from "react";
import { createItem } from "../services/itemsService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    location: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {  
    await createItem({
      ...form,
      userId: user.uid,
      userEmail: user.email
    });

    navigate("/items");
    } catch (error) {
      console.log(error);
    }   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-4">
          Create Post
        </h1>

        <input
          name="title"
          placeholder="Item title"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <select
          name="type"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        >
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <input
          name="location"
          placeholder="Location"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;