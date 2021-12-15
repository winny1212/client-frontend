import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './dataSlider';

export default function About() {
  // set up the state of image in the carousel
  const [image, setImage] = useState(data);
  //set up the index of image in the carousel
  const [index, setIndex] = React.useState(0);

  //if the current index of image is smaller than 0, we will change it to the last index of image, if it is greater than the last index, we will set it to the 0.
  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  // the function for image carousel, the image will slide each second
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 1000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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

          let position = 'nextSlide';
          if (imageIndex === index) {
            position = 'activeSlide';
          }
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

      <div className="para">
        <h3>Welcome to the Notting Hill Dog DIY Blog</h3>
        <p>
          Welcome to the Notting Hill Community Dog Blog! We are Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dicta, ullam minima.
          Maiores nisi iste sit necessitatibus officiis cumque distinctio
          accusamus nesciunt asperiores dolore iusto inventore fugit ut
          quisquam, modi saepe. Labore perferendis rem minus eius excepturi
          aliquam eos, adipisci iure vel sunt odit, eaque qui laboriosam. Rem
          inventore sunt sequi tempora dignissimos, debitis eligendi iste soluta
          autem quasi explicabo excepturi. Consectetur laborum ex non minus
          commodi doloremque dolores unde molestiae inventore? Ratione quidem
          similique veritatis debitis consequatur maxime doloribus nemo itaque
          aperiam quisquam magni, provident cumque sed beatae rem! Veritatis.
          Voluptates sit commodi, porro ad quod in eum nobis totam soluta
          aspernatur magni dicta laudantium debitis tenetur magnam adipisci, cum
          fugiat perspiciatis voluptatum veritatis illo fugit dolore. Culpa,
          dolorum magni. Sapiente deleniti voluptates officia nemo culpa dolor
          at enim, corrupti facilis! Voluptas illum eius exercitationem
          molestias, pariatur expedita voluptates hic error voluptatem, nesciunt
          reiciendis dicta fugit. Ex doloribus corrupti voluptas.
        </p>
      </div>
    </section>
  );
}
