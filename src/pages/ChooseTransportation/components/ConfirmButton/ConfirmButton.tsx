import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";

export const ConfirmButton: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const { send } = applicationService;

  const handleButtonClick = () => {
    send("NEXT-STEP");
  };

  return (
    <Button onClick={handleButtonClick} variant={"outlined"}>
      I confirm
    </Button>
  );
};
