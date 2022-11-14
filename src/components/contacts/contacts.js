import "./contacts.css";
import insta from "../../assets/svg/contacts/insta.svg";
import behance from "../../assets/svg/contacts/behance.svg";
import dribble from "../../assets/svg/contacts/dribble.svg";
import group2 from "../../assets/svg/contacts/group2.svg";

export const Contacts = () => {
  return (
    <section class="contacts" id="contacts">
      <div class="container">
        <div class="contacts__inner">
          <h2 class="contacts__title title">Contacts</h2>

          <p class="contacts__description">Want to know more or just chat?</p>

          <p class="contacts__description">You are welcome!</p>

          <button class="contacts__btn">Send message</button>

          <ul class="contacts__social">
            <li class="contacts__social-card social">
              <a href="https://www.linkedin.com/" target="_blank">
                <img class="social__image" src={insta} alt="insta social" />
              </a>
            </li>
            <li class="contacts__social-card social">
              <a href="https://www.instagram.com/" target="_blank">
                <img class="social__image" src={group2} alt="insta social" />
              </a>
            </li>
            <li class="contacts__social-card social">
              <a href="https://www.behance.net/" target="_blank">
                <img class="social__image" src={behance} alt="insta social" />
              </a>
            </li>
            <li class="contacts__social-card social">
              <a href="https://dribbble.com/" target="_blank">
                <img class="social__image" src={dribble} alt="insta social" />
              </a>
            </li>
          </ul>

          <div class="contacts__text">
            <p class="contacts__text-description">Like me one</p>
            <p class="contacts__text-description">
              LinkedIn, Instagram, Behance, Dribble
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
