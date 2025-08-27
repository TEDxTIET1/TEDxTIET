import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      style={{
        background: "black",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "auto ",
      }}
    >
      <hr style={{ border: "1px solid white" }} />
      <img
        src="/ted_logo.png"
        style={{
          width: "25%",
          alt: "",
          height: "auto",

          margin: "auto",
          alignContent: "center",
          margintop: "30px",
          marginbottom: " 10px",
        }}
      />
      <hr
        style={{
          border: "1px solid white",
          width: "200px",
          alignContent: "center",
          margin: "auto",
          marginBottom: "0px",
          marginTop: "15px",
        }}
      ></hr>
      <a href="" style={{ textDecoration: "none" }}>
        <h3
          style={{
            height: "50px",
            margin: "auto",
            alignContent: "center",
            margintop: "10px",
            marginbottom: "30px",
            color: "red",
          }}
        >
          CONTACT US.
        </h3>
      </a>
      <div
        style={{
          display: "flex",
          gap: "2%",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          padding: "20px",
        }}
      >
        <span style={{ fontSize: "28px", marginRight: "20px" }}>
          Find us at:{" "}
        </span>
        <a
          href="https://www.facebook.com/tedxtiet/"
          target="_blank"
          rel="noreferrer"
          className="fa-brands fa-facebook"
          style={{
            color: "white",
            fontSize: "28px",
            marginRight: "20px",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#1877F2")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        ></a>
        <a
          href="https://www.instagram.com/tedxtiet/#"
          target="_blank"
          rel="noreferrer"
          className="fa-brands fa-instagram"
          style={{
            color: "white",
            fontSize: "28px",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = " #D62976 ")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        ></a>
        <a
          href="https://www.linkedin.com/company/tedxtiet/"
          target="_blank"
          rel="noreferrer"
          className="fa-brands fa-linkedin-in"
          style={{
            color: "white",
            fontSize: "28px",
            margin: "0 10px",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#0A66C2")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        ></a>
        <a
          href="https://www.youtube.com/playlist?list=PLwvmGZzdo6jA8Fk6aVwQ5zAksnJfCf1o4"
          target="_blank"
          rel="noreferrer"
          className="fa-brands fa-youtube"
          style={{
            color: "white",
            fontSize: "28px",
            margin: "0 10px",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#FF0000")}
          onMouseOut={(e) => (e.currentTarget.style.color = "white")}
        ></a>
      </div>
      <hr style={{ border: "1px solid white", marginBottom: "10px" }} />
      <p>© {new Date().getFullYear()} TEDxTIET. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
