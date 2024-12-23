import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

const backendBaseUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL || "http://localhost:3000";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Rocket"
        productDesription="Our ultra-fast flagship trading platform features real-time market data, advanced charts, and a sleek UI. Experience the TradeZypher platform seamlessly on your Android and iOS devices."
        tryDemo={`${backendBaseUrl}`}
        learnMore={`${backendBaseUrl}/`}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Terminal"
        productDesription="The central dashboard for your TradeZypher account. Access insights into your trades and investments through detailed reports and visualizations."
        learnMore={`${backendBaseUrl}/holdings`}
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Mudra"
        productDesription="Invest in direct mutual funds online, commission-free, and have them delivered straight to your Demat account. Enjoy a seamless investment experience on your Android and iOS devices."
        tryDemo={`${backendBaseUrl}/apps`}
        learnMore={`${backendBaseUrl}/apps`}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Rocket Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore={`${backendBaseUrl}/`}
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://zerodha.com/varsity/"
        learnMore="https://zerodha.com/varsity/"
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the
        TradeZypher.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;
