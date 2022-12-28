import React from "react";
import "./works.scss";
import image from '../../../assets/icons/project.png';

const Works = () => {
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="works__projects">
          <img src={image} alt="img" />
          <div className="works__info">
            <div className="works__title">40+</div>
            <p>проектов</p>
          </div>
        </div>
        <div className="works__projects">
          <img src={image} alt="img" />
          <div className="works__info">
            <div className="works__title">40+</div>
            <p>проектов</p>
          </div>
        </div>
        <div className="works__projects">
          <img src={image} alt="img" />
          <div className="works__info">
            <div className="works__title">40+</div>
            <p>проектов</p>
          </div>
        </div>
        <div className="works__projects">
          <img src={image} alt="img" />
          <div className="works__info">
            <div className="works__title">40+</div>
            <p>проектов</p>
          </div>
        </div>
        <div className="works__projects">
          <img src={image} alt="img" />
          <div className="works__info">
            <div className="works__title">40+</div>
            <p>проектов</p>
          </div>
        </div>
        <div className="works__projects">
          <img src={image} alt="img" />
          <div className="works__info">
            <div className="works__title">40+</div>
            <p>проектов</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;