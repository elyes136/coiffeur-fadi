import testimonialList from "../assets/testimonialList";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (!testimonialList || testimonialList.length === 0) return;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialList.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialList?.[activeTestimonial];

  return (
    <section
      className="testimonials"
      data-reveal
      style={{ "--reveal-delay": "70ms" }}
    >
      <div
        className="testimonials-header"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
      >
        <h2 className="testimonials-title">
          Ce que nos clients disent de nous
        </h2>

        <div className="google-rating" aria-label="Note Google Maps 4.9 sur 5">
          <span className="google-rating-score">4.9/5</span>
          <span className="google-rating-stars">★★★★★</span>
          <span className="google-rating-source">Google Maps</span>
        </div>
      </div>

      <div
        className="testimonials-slider"
        data-reveal
        style={{ "--reveal-delay": "170ms" }}
      >
        {currentTestimonial && (
          <article className="testimonial-card" key={currentTestimonial.id}>
            <p className="testimonial-quote">“{currentTestimonial.quote}”</p>
            <span className="testimonial-author">
              — {currentTestimonial.author}
            </span>
          </article>
        )}

        <div className="testimonial-controls">
          <div
            className="testimonial-dots"
            role="tablist"
            aria-label="Navigation témoignages"
          >
            {testimonialList.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`testimonial-dot ${
                  activeTestimonial === index ? "active" : ""
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Voir le témoignage ${index + 1}`}
                aria-selected={activeTestimonial === index}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
