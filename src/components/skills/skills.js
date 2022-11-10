import "./skills.css";
import ps from "../../assets/img/ps.png";
import ae from "../../assets/img/ae.png";
import ai from "../../assets/img/ai.png";
import figma from "../../assets/img/figma.png";

import star from "../../assets/svg/sprites/sprite.svg";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__inner">
          <h2 className="skills__title title">About me</h2>

          <p className="skills__description">I work in such programs as</p>

          <div className="skills__card">
            <div className="skills__card-content content">
              <img
                src={ps}
                alt="adobe photoshop icon"
                className="content__image"
              />

              <p className="skills__card-title">
                Adobe <br />
                Photoshop
              </p>

              <div className="content__grade">
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skills__card-content content">
              <img
                src={ai}
                alt="adobe illustrator icon"
                className="content__image"
              />

              <p className="skills__card-title">
                Adobe <br />
                Illustrator
              </p>

              <div className="content__grade">
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image color">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image color">
                    <use xlinkHref={star} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skills__card-content content">
              <img
                src={ae}
                alt="adobe after effects icon"
                className="content__image"
              />

              <p className="skills__card-title">
                Adobe <br />
                After Effects
              </p>

              <div className="content__grade">
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="skills__card-content content">
              <img src={figma} alt="figma icon" className="content__image" />

              <p className="skills__card-title">Figma</p>

              <div className="content__grade grade">
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} style={{ fill: "red" }} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
                <div className="grades">
                  <svg className="grades__image">
                    <use xlinkHref={star} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
