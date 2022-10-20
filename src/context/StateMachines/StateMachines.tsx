import React from "react";
import { useInterpret } from "@xstate/react";
import { ApplicationMachineContext } from "./StateMachines.context";
import { applicationMachine } from "./applicationMachine";

export const StateMachines: React.FC = ({ children }) => {
  const applicationService = useInterpret(applicationMachine);

  return (
    <ApplicationMachineContext.Provider value={{ applicationService }}>
      {children}
    </ApplicationMachineContext.Provider>
  );
};
