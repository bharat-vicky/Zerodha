import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#187ecc" }}>
      <div className="row p-5"> 
        <div  className="col-10 p-2">
          <h4>Support Portal</h4>
        </div> 
        <div className="col-2 p-2 " >
          <h4>Track Tickets</h4>
        </div>
      </div>
      <div className="row p-5 mt-0 m-3">
        <div className="col-8 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{ textDecoration: "none", color: "white" }} >Track account opening / </a>
          <a href="" style={{ textDecoration: "none", color: "white" }} >Track segment activation / </a>
          <a href="" style={{ textDecoration: "none", color: "white" }} >Intraday margins / </a>
          <a href="" style={{ textDecoration: "none", color: "white" }} >Kite user manual</a>
        </div>
        <div className="col-4 p-3 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ textDecoration: "none", color: "white" }} >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "none", color: "white" }} >Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;