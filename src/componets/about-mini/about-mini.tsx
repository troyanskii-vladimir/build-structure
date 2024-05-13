function AboutMini(): JSX.Element {
  return (
    <section className="about-section page__section">
      <div className="content-container about-section__grid">
        <div className="about-section__text-wrap">
          <div className="about-section__title">MIDAS</div>
          <div className="about-section__text text-content">
            Компания-разработчик программного обеспечения для инженеров
            в&nbsp;области транспортного, геотехнического и&nbsp;гражданского
            строительства, основана в&nbsp;2000 году
          </div>
          <div className="about-section__more">
            <a
              href="https://midasoft.ru/about/"
              className="link link--with-icon link--more"
            >
              <span className="link__text">О компании</span>
              <span className="link__icon">
                <svg className="symbol symbol-more symbol">
                  <use xlinkHref="/local/build-prod/symbols.svg#more" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="about-section__items-wrap">
          <div className="h2 about-section__subtitle">
            Modeling, Integrated Design &amp;&nbsp;Analysis Software
          </div>
          <div className="about-section__items">
            <div className="about-item">
              <div className="about-item__value">800</div>
              <div className="about-item__text">
                технических инженеров и специалистов в штате
              </div>
            </div>{" "}
            <div className="about-item">
              <div className="about-item__value">110</div>
              <div className="about-item__text">
                стран используют <br />
                наши продукты
              </div>
            </div>{" "}
            <div className="about-item">
              <div className="about-item__value">37 000</div>
              <div className="about-item__text">
                лицензий представлено по&nbsp;всему миру
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMini;
