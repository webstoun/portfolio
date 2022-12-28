import React from 'react';
import style from './header.module.scss';
import logo from '../../../assets/image/header/logo.png';
import image from '../../../assets/image/header/Frame.png';

const Header = () => {
  return (
    <header id="header" className={style.wrap}>
      <div className="container">
        <div className={style.top}>
          <div className={style.logo}>
            <img src={logo} alt="img" />
          </div>
          <div className={style.nav}>
            <ul>
              <a href="#">
                <li className={style.active}>Главная</li>
              </a>
              <a href="#">
                <li>Об авторе</li>
              </a>
              <a href="#">
                <li>Работы</li>
              </a>
              <a href="#">
                <li>Процесс</li>
              </a>
              <a href="#">
                <li>Контакты</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.img}>
            <img src={image} alt="img" />
          </div>
          <div className={style.info}>
            <h1>Дизайн и верстка</h1>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
              является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>
            <button>Написать мне</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
