import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./Register.css";

// Supabase setup
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
    email: "",
    phone_no: "",
    year_of_study: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.email.endsWith("@thapar.edu")) {
      setMessageType("error");
      setMessage("Please use a valid @thapar.edu email address.");
      return;
    }

    const registrationData = {
      name: formData.name,
      roll_no: formData.roll_no,
      email: formData.email,
      phone_no: formData.phone_no.trim() === "" ? null : formData.phone_no,
      year_of_study: parseInt(formData.year_of_study),
    };

    try {
      const { error } = await supabase
        .from("registrations")
        .insert([registrationData]);

      if (error) throw error;

      setMessageType("success");
      setMessage("Registration successful! Welcome.");
      setFormData({
        name: "",
        roll_no: "",
        email: "",
        phone_no: "",
        year_of_study: "",
      });
    } catch (error) {
      console.error("Supabase error:", error);
      let friendlyMessage = "Registration failed. Please try again.";
      if (error.code === "23505")
        friendlyMessage = "This Roll No. or Email is already registered.";
      setMessageType("error");
      setMessage(friendlyMessage);
    }
  };

  return (
    <div className="register-container" style={{ padding: "40px", background: "#f3f4f6", minHeight: "100vh" }}>
      <h2>Event Registration</h2>
      <form id="registration-form" onSubmit={handleSubmit}>
        <input id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input id="roll_no" placeholder="Roll Number" value={formData.roll_no} onChange={handleChange} required />
        <input id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input id="phone_no" placeholder="Phone Number" value={formData.phone_no} onChange={handleChange} />
        <input id="year_of_study" placeholder="Year of Study" value={formData.year_of_study} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      {message && (
        <p
          style={{
            color: messageType === "error" ? "red" : "green",
            marginTop: "20px",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
