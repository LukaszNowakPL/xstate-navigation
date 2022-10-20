import React, { useContext } from "react";
import Alert from "@mui/material/Alert";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";

export const TransportationTypeInfo: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const transportationType = useSelector(
    applicationService,
    getSelectedTransportationContext
  );
  return (
    <>
      {transportationType === "air" && (
        <Alert severity="info">
          Air transportation is suitable for distances above 500km where there
          is no train connection available.
        </Alert>
      )}
      {transportationType === "mass" && (
        <Alert severity="info">
          Best choice from environmental point of view.
        </Alert>
      )}
      {transportationType === "car" && (
        <Alert severity="info">
          Car transportation produces a lot of air pollution. Consider car
          sharing or train / bus connection.
        </Alert>
      )}
    </>
  );
};

//@ToDo: typing
const getSelectedTransportationContext = (state: any) => {
  return state.context.selectedTransportationType;
};
