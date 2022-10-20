import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { ApplicationMachineContext } from "../../../context/StateMachines/StateMachines.context";

export const useShouldComponentDisplay = (componentName: string) => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const latestComponent = useSelector(
    applicationService,
    getChooseTransportationState
  );

  return (
    componentsOrder.indexOf(componentName) <=
    componentsOrder.indexOf(latestComponent)
  );
};

const componentsOrder = [
  "selectTransportationType",
  "bestOption",
  "goodRepresentation",
  "finalConfirmation"
];

//@ToDo: typing
const getChooseTransportationState = (state: any) => {
  return state.value["choose-transportation"];
};
