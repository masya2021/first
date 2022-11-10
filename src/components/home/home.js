import "./home.css";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__inner-general">
            <h1 className="home__title home__title-text">
              Denis <br /> Novik{" "}
            </h1>
            <p className="home__describe">
              UX | UI designer <br />
              24 years old, Minsk
            </p>
            <p className="home__language">
              <span className="passive">RU </span>
              <span className="active">| ENG</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* <button classNamme="burger" id="burger__menu" type="button">
            <span classNamme="burger__line" id="burger__line"></span>
          </button>

          <div classNamme="home__mobile-menu mobile  menus" id="mobiles">
            <button classNamme="mobile__close-btn" type="button">
              <svg
                width="23"
                height="23"
                viewbox="0 0 23 23"
                fill=" "
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.68701"
                  width="27.3715"
                  height="3.8"
                  transform="rotate(45 2.68701 0)"
                  fill=" "
                />
                <rect
                  x="0.831299"
                  y="19.5566"
                  width="27.3715"
                  height="3.8"
                  transform="rotate(-45 0.831299 19.5566)"
                  fill=" "
                />
              </svg>
            </button>
            <ul classNamme="mobile__list">
              <li className="mobile__item">
                <a href="#home" classNamme="mobile__link">
                  Home
                </a>
              </li>
              <li classNamme="mobile__item">
                <a href="#aboutme" classNamme="mobile__link">
                  About me
                </a>
              </li>
              <li classNamme="mobile__item">
                <a href="#skills" classNamme="mobile__link">
                  Skills
                </a>
              </li>
              <li classNamme="mobile__item">
                <a href="#portfolio" classNamme="mobile__link">
                  Portfolio
                </a>
              </li>
              <li classNamme="mobile__item mobile__item-burger">
                <a href="#contacts" classNamme="mobile__link">
                  Contacts
                </a>
              </li>
            </ul>

            <p classNamme="mobile__language">
              <span classNamme="mobile__language-text">RU </span>{" "}
              <span classNamme="mobile__language-text">| ENG</span>
            </p>
          </div> */
