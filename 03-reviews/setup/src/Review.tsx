import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  console.log(people);
  console.log(people.length);
  console.log("what is my index now", index);

  const checkNumber = (number: number) => {
    // Since an index length of 4 items is .length of 4 but arrays start at 0 you need to -1 to match array value
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // Math.random randomizes a number between 0-1
  // multiplying it by array length will make it between potential index's I could use
  // Math.floor rounds it to nearest integer as I can't use a floating point (decimal value)
  // And to prevent it from being same person added an if statement to technically make it less random
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
    console.log("random math value", randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomPerson()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
