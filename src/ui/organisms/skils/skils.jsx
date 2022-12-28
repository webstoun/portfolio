import React from "react";
import "./skils.scss";
import photo from '../../../assets/image/skils/photo.png'

const Skils = () => {
  return (
    <section id="skils" className="skils">
      <div className="container">
        <div className="skils__left">
          <h2 className="skils__title">Мои навыки</h2>
          <div className="skils__items">
            <p>Adobe Photoshop</p>
            <div className="skils__level">
              <p></p>
            </div>
          </div>
          <div className="skils__items">
            <p>Adobe Photoshop</p>
            <div className="skils__level">
              <p></p>
            </div>
          </div>
          <div className="skils__items">
            <p>Adobe Photoshop</p>
            <div className="skils__level">
              <p></p>
            </div>
          </div>
        </div>
        <div className="skils__right">
          <img src={photo} alt="img" />
        </div>
      </div>
    </section>
  )
}

export default Skils;