import React from "react";
import { useNavigate } from "react-router-dom";
import event1 from "../assets/First.png";
import event2 from "../assets/Second.png";
import event3 from "../assets/Third.png";
import "./Event.css";

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className="event-container">
      <div className="event-header">
        <div className="event-details">
          <h1>EVENT DETAILS</h1>
         
        </div>
        <button className="register-btn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>

      <div className="event-images">
        <img src={event1} alt="Event 1" />
        <img src={event2} alt="Event 2" />
        <img src={event3} alt="Event 3" />
      </div>
    </div>
  );
};

export default Event;
