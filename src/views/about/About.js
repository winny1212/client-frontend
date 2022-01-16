import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Header from '../../components/shared/Header';

import data from './dataSlider';
import './Slider.css';

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
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <Header title="About DIY Grooming" />
      <section className="section">
        <div className="section-center">
          {/* map the carousel data */}
          {image.map((image, imageIndex) => {
            const { id, image_link, title } = image;

            // set the current image position
            let position = 'nextSlide';
            if (imageIndex === index) {
              position = 'activeSlide';
            }

            if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === image.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              // display the carousel data
              <article className={position} key={id}>
                <img src={image_link} alt={title} className="dog-img" />

                <p className="title">{title}</p>
              </article>
            );
          })}
          {/* import the left icon button and set up the click function */}
          <button className="prev arrow" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          {/* import the right icon and set up the click function */}
          <button className="next arrow" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>

        {/* introduction part */}
        <div className="para">
          <h3>Welcome to the Notting Hill Dog DIY Blog</h3>
          <div className="content">
            <p>
              &nbsp; &nbsp;Welcome to the Notting Hill Community Dog Blog! This
              is an platform where everyone can create an online blog, dedicated
              to dog owners in the community to post about their dog grooming
              tips and tricks to help the community to do their own DIY dog
              grooming. As well as to give opportunity for the professional dog
              groomers to get back on their business again if needed as a mobile
              dog grooming service.
            </p>
            <br></br>
            <p>
              &nbsp; &nbsp;If you have your lovely dog and want to know more
              knowledge about grooming your dog or want to make more friends who
              also has dogs and is closed to you, please feel free to join us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
