"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./queryform.css"; // 👈 we'll move the CSS here

export default function ContactForm() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_nh86wvl",   // ✅ Replace with your Service ID
                "template_19cpuat", // ✅ Replace with your Template ID
                formRef.current,
                { publicKey: "PTD1pglSvedAnAHyf" } // ✅ Replace with your Public Key
            )
            .then(
                (response) => {
                    alert("Message sent ✅");
                    console.log("SUCCESS", response);
                },
                (error) => {
                    alert("Failed ❌");
                    console.error("FAILED", error);
                }
            );
    };
    const goHome = () => {
        window.location.href = "/home";
    };
    return (
        <div>

            <div className="login-box">
                <h2>Contact Us</h2>
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="user-box">
                        <input type="text" name="name" required />
                        <label>Name</label>
                    </div>

                    <div className="user-box">
                        <input type="email" name="email" required />
                        <label>Email</label>
                    </div>

                    <div className="user-box">
                        <textarea name="message" required />
                        <label>Message</label>
                    </div>

                    <button type="submit">Send</button>

                </form>

            </div>
            <button
                onClick={goHome}
                style={{
                    position: "fixed",   // fixed to viewport
                    bottom: "10px",      // distance from bottom edge
                    left: "10px",        // distance from left edge
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    width: "50px",       // ensure clickable area matches svg
                    height: "50px",
                    padding: 0,
                    zIndex: 1000
                }}>
                <svg
                    width="50" height="50" viewBox="0 0 50 50" aria-label="Back" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }}>
                    <circle
                        cx="25" cy="25" r="24" fill="#E02424" style={{ cursor: "pointer" }} />
                    <path d="M29 16 L20 25 L29 34" fill="none" stroke="#000000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                    <line x1="21" y1="25" x2="36" y2="25" stroke="#000000" stroke-width="3.5" stroke-linecap="round" />
                </svg>
            </button>
        </div>
    );
}
