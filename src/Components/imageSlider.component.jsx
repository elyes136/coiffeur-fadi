import React, { useState, useEffect } from "react";
import "../assets/style/imageSlider.css";

export default function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // ✅ ALWAYS call hooks first (even if images is empty)
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ❌ only AFTER hooks you can do early return
  if (!images.length) {
    return <div className="slider-empty">No images provided</div>;
  }

  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches[0].clientX;
    setDeltaX(x - startX);
  };

  const handleEnd = () => {
    setIsDragging(false);

    const threshold = 80;

    if (deltaX > threshold && index > 0) {
      setIndex(index - 1);
    } else if (deltaX < -threshold && index < images.length - 1) {
      setIndex(index + 1);
    }

    setDeltaX(0);
  };

  return (
    <section
      className="page image-slider-page"
      data-reveal
      style={{ "--reveal-delay": "70ms" }}
    >
      <div
        className="slider-header"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
      >
        <h2 className="slider-title">Gallerie</h2>
      </div>
      <div className="slider-container">
        <div
          className="slider-viewport"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          <div
            className="slider-track"
            style={{
              transform: `translateX(calc(-${index * 100}% + ${deltaX}px))`,
              transition: isDragging ? "none" : "transform 0.3s ease",
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`slide-${i}`}
                className="slider-image"
                draggable={false}
              />
            ))}
          </div>

          <div className="slider-indicators">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`slider-dot ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
