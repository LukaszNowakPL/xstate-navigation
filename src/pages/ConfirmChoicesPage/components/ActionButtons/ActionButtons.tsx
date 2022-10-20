import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";

export const ActionButtons: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const areButtonsDisabled = useSelector(
    applicationService,
    getIsPendingApiCall
  );
  const { send } = applicationService;

  const handleButtonClick = (action: "PREV-PAGE" | "INIT-API-CALL") => {
    send(action);
  };

  return (
    <>
      <Button
        variant={"contained"}
        onClick={() => handleButtonClick("PREV-PAGE")}
        disabled={areButtonsDisabled}
      >
        Prev
      </Button>
      <Button
        variant={"contained"}
        onClick={() => handleButtonClick("INIT-API-CALL")}
        disabled={areButtonsDisabled}
      >
        Next
      </Button>
    </>
  );
};

//@ToDo: typing
const getIsPendingApiCall = (state: any) => {
  return state.matches("confirm-choices.pending");
};
