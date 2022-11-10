import "./information.css";

export const Information = () => {
  return (
    <section className="information" id="aboutme">
      <div className="container">
        <div className="information__inner">
          <h2 className="information__title title">About me</h2>

          <p className="information__description">
            Hi, I'm Denis – UX/UI designer from Minsk. <br />
            I'm interested in design and everything connected with it.
          </p>

          <p className="information__description">
            I'm studying at courses "Web and mobile design interfaces" <br /> in
            IT-Academy.
          </p>

          <p className="information__description">
            Ready to implement excellent projects <br />
            with wonderful people.
          </p>
        </div>
      </div>
    </section>
  );
};
