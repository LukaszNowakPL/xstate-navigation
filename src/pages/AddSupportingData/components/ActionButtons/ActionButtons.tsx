import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { useFormState } from "react-final-form";
import { useSupportingDataFormContext } from "../../../../context/AppContext/Context/useSupportingDataFormContext";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";

export const ActionButtons: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const { values } = useFormState();
  const { storeSupportingDataForm } = useSupportingDataFormContext();
  const { send } = applicationService;

  const isNextDisabled = useSelector(
    applicationService,
    getNextPageStateExistence
  );

  const handleButtonClick = (event: "PREV-PAGE" | "NEXT-PAGE") => {
    storeSupportingDataForm(values);
    send(event);
  };

  return (
    <>
      <Button
        variant={"contained"}
        onClick={() => handleButtonClick("PREV-PAGE")}
      >
        Prev
      </Button>
      <Button
        variant={"contained"}
        onClick={() => handleButtonClick("NEXT-PAGE")}
        disabled={isNextDisabled}
      >
        Next
      </Button>
    </>
  );
};

//@ToDo: typing
const getNextPageStateExistence = (state: any) => {
  return !state.nextEvents.includes("NEXT-PAGE");
};
