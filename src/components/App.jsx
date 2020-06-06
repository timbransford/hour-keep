import React, { useRef } from "react";
import HeaderA from "./HeaderA";
import HeaderB from "./HeaderB"
import FooterA from "./FooterA";
import FooterB from "./FooterB"
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
      <HeaderA />
      <BodyA />
      <FooterA />
      {/*<Experiment ref={experiment} name="HourKeeeperExperiment">*/}
      {/*  <Variant name="control">*/}
      {/*<HeaderA />*/}
      {/*<BodyA />*/}
      {/*<FooterA />*/}
      {/*  </Variant>*/}
      {/*  <Variant name="variant">*/}
      {/*<HeaderB />*/}
      {/*<BodyB />*/}
      {/*<FooterB />*/}
      {/*  </Variant>*/}
      {/*</Experiment>*/}
    </div>
  );
}
