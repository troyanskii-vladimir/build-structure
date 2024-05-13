import { Link } from 'react-router-dom';
import { AppRoute } from '../../config';


function Header(): JSX.Element {
  return (
    <header className="header js-header header--fixed">
      <div className="content-container header__grid">
        <div
          className="menu-icon menu-icon--btn header__menu-btn js-header-menu-btn"
        >
          <i />
          <i />
          <i />
        </div>
        <Link to={AppRoute.Main} className="logo header__logo">
          <img
            className="logo__img"
            src="./img/svg/logo.svg"
            alt="Логотип"
          />
          <div className="logo__tagline">
            Специализированные расчетные комплексы MIDAS
          </div>
        </Link>
        <div
          className="header__menu custom-scrollbar custom-scrollbar--dark"
          data-scroll-lock-scrollable=""
        >
          <div className="header-nav header__nav">
            <ul className="header-nav__ul">
              <li className="header-nav__li">
                <Link
                  to={AppRoute.Events}
                  className="header-nav__link link link--with-icon"
                >
                  <span className="link__text">Вебинары</span>
                </Link>
              </li>
              <li className="header-nav__li">
                <Link
                  to={AppRoute.Blog}
                  className="header-nav__link link link--with-icon"
                >
                  <span className="link__text">Статьи</span>
                </Link>
              </li>
              <li className="header-nav__li">
                <Link
                  to={AppRoute.About}
                  className="header-nav__link link link--with-icon"
                >
                  <span className="link__text">О компании</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
