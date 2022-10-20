import React from "react";
import { BestOption } from "./components/BestOption/BestOption";
import { TransportationType } from "./components/TransportationType/TransportationType";
import { GoodRepresentation } from "./components/GoodRepresentation/GoodRepresentation";
import { FinalConfirmation } from "./components/FinalConfirmation/FinalConfirmation";

export const ChooseTransportationPage: React.FC = () => {
  return (
    <>
      <TransportationType />
      <BestOption />
      <GoodRepresentation />
      <FinalConfirmation />
    </>
  );
};
