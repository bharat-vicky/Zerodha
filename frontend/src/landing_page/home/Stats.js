import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trade with confidence</h1>
          <h2 className="fs-4">Always putting customers first</h2>
          <p className="text-muted">
          Start your journey with TradeZypher, where users trust us with their equity investments, building towards a future of financial growth.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
          No gimmicks, no spam, no distractions. Enjoy high-quality apps that let you trade and invest at your own pace.
          </p>
          <h2 className="fs-4">The TradeZypher Ecosystem</h2>
          <p className="text-muted">
          More than just an app—TradeZypher is a growing ecosystem.
          As we expand, our aim is to bring you tailored services through strategic partnerships and innovative solutions, designed to meet your unique needs.
          </p>
          <h2 className="fs-4">Empower your financial journey</h2>
          <p className="text-muted">
          With features like Smart Alerts and Trade Guard,
          we go beyond facilitating transactions—we actively help you make smarter financial decisions and manage your investments better.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="./products" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/`} style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
