"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./queryform.css"; // 👈 we'll move the CSS here

export default function ContactForm() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ydbgjnd",   // ✅ Replace with your Service ID
                "template_l5s1qgt", // ✅ Replace with your Template ID
                formRef.current,
                { publicKey: "Nv4ZdesHr_WOMukIt" } // ✅ Replace with your Public Key
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

    return (
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
    );
}
