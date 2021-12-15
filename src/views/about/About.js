import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './dataSlider';

export default function About() {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>About
        </h2>
      </div>
      <div className="section-center">
        {image.map((image, imageIndex) => {
          const { id, image_link, title } = image;

          return (
            <article className={position} key={id}>
              <img src={image_link} alt={title} className="person-img" />

              <p className="title">{title}</p>
            </article>
          );
        })}
        {/* import the left icon button and set up the click function */}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        {/* import the right icon and set up the click function */}
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
