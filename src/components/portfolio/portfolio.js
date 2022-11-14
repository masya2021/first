import "./portfolio.css";
import newcollection from "../../assets/img/newcollection.jpg";
import reebokweb from "../../assets/img/reebokweb.jpg";
import reebokweb1 from "../../assets/img/reebokweb1.jpg";

export const Portfolio = () => {
  return (
    <section class="portdolio" id="portfolio">
      <div class="container">
        <div class="portdolio__inner">
          <h2 class="portdolio__title title">Portfolio</h2>

          <img
            src={newcollection}
            class="portfolio-image"
            alt="Online fashion store"
          />

          <a href="#" class="portfolio__link">
            Online fashion store - Homepage
          </a>

          <img
            src={reebokweb}
            class="portfolio-image"
            alt="Reebok Store Concept"
          />

          <a href="#" class="portfolio__link">
            Reebok Store - Concept
          </a>

          <img
            src={reebokweb1}
            class="portfolio-image"
            alt="braun portable macro T52"
          />

          <a href="#" class="portfolio__link">
            Braun Landing Page - Concept
          </a>
        </div>
      </div>
    </section>
  );
};
