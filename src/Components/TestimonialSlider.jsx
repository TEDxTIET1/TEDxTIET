import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import abt1 from "../assets/abt1.webp";
import abt2 from "../assets/abt2.webp";
import abt3 from "../assets/abt3.webp";
import "./TestimonialSlider.css"; // Import CSS file

const testimonials = [
  {
    id: 1,
    title: "TED",
    content: `TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.`,
    image: abt1,
  },
  {
    id: 2,
    title: "TEDx",
    content: `In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)`,
    image: abt2,
  },
  {
    id: 3,
    title: "TEDxTIET",
    content: `TEDxTIET is an annual independently organized TED event that commenced in 2015. It is driven by a dedicated team of passionate volunteers, comprising undergraduate and post-graduate students of Thapar Institute of Engineering and Technology (TIET). The main conference at TEDxTIET is a culmination of months of meticulous preparation, bringing together visionaries, innovators, and changemakers for an extraordinary day of exploration and inspiration. Set against the backdrop of Thapar University in Patiala, this event transcends traditional conferences, embodying a celebration of human creativity and resilience.`,
    image: abt3,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[current];

  return (
    <div className="testimonial-container">
      <h1 className="abt-text">ABOUT US</h1>
      <div className="testimonial-wrapper">
        {/* Text section */}
        <div className="testimonial-text">
          <span className="quote-mark">&ldquo;</span>
          <h2 className="testimonial-title">{testimonial.title}</h2>
          <p className="testimonial-content">{testimonial.content}</p>
        </div>

        {/* Image + controls */}
        <div className="testimonial-image-controls">
          <div className="testimonial-image">
            <img src={testimonial.image} alt="testimonial" />
          </div>

          <div className="testimonial-controls">
            <button onClick={prevSlide} className="control-btn">
              <ChevronUp size={20} />
            </button>
            <button onClick={nextSlide} className="control-btn">
              <ChevronDown size={20} />
            </button>

            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === current ? "active" : ""
                    }`}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
