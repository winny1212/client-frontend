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
      </div>
    </section>
  );
}
