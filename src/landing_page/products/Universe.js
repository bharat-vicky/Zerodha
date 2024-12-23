import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The TradeZypher Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/Rocket Logo.png" />
          <p className="text-small text-muted">Our asset management venture focuses on creating simple and transparent index funds to help you save and achieve your financial goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Mudra (1).png" />
          <p className="text-small text-muted">A thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/LifeSaver (1).png" />
          <p className="text-small text-muted">Get personalized advice on life and health insurance—no spam, no mis-selling. Sign up for free today.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Thunder (1).png" />
          <p className="text-small text-muted">A systematic trading platform that lets you create and backtest strategies—no coding required.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Treasury (1).png" />
          <p className="text-small text-muted">An investment research platform that provides comprehensive insights into stocks, sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Terminal (1).png" />
          <p className="text-small text-muted">A thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;