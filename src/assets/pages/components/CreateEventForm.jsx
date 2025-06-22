import React, { useState } from "react";

const CreateEventForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://<din-eventservice-url>/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ title: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="title-md">Create New Event as admin </h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
        rows="4"
      />
      <button type="submit" className="btn-md primary" style={{ marginTop: "1rem" }}>
        Create Event
      </button>
      {success && <p style={{ color: "green" }}>Event created!</p>}
    </form>
  );
};

export default CreateEventForm;
