import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BodyA from "./BodyA";
import BodyB from "./BodyB";
import "../styles/App.css";

const Experiment = require("react-ab-test/lib/Experiment");
const Variant = require("react-ab-test/lib/Variant");
const emitter = require("react-ab-test/lib/emitter");

export default function App() {
  const experiment = useRef();
  emitter.defineVariants(
    "HourKeeperExperiment",
    ["control", "variant"],
    [50, 50]
  );

  return (
    <div className="App">
      <Header />
      <Experiment ref={experiment} name="HourKeeeperExperiment">
        <Variant name="control">
          <BodyA />
        </Variant>
        <Variant name="variant">
          <BodyB />
        </Variant>
      </Experiment>
      <Footer />
    </div>
  );
}
