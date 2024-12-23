import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We introduced the discount broking model in India.
          <br />
          Now, we are setting new standards with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We launched operations on October 24, 2024, with the mission of
            eliminating all barriers that traders and investors encounter in
            India, focusing on cost, support, and technology. We named our
            company TradeZypher, blending "Trade" with "Zypher," which signifies
            speed and efficiency.
          </p>
          <p>
            Today, our innovative pricing models and proprietary technology have
            positioned us as one of the leading stock brokers in India.
          </p>
          <p>
            We want to get Over 1+ Crore clients place millions of orders every
            day through our powerful ecosystem of investment platforms,
            contributing as much as possible in all Indian retail trading
            volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Additionally, we offer various popular online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a
              href="https://rainmatter.com/"
              style={{ textDecoration: "none" }}
            >
              Rainmatter
            </a>
            , is fintech fund and incubator have invested in several startups to
            foster the growth of Indian capital markets.
          </p>
          <p>
            And every day, we're working on something new. Stay updated with the
            latest news on our blog or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
