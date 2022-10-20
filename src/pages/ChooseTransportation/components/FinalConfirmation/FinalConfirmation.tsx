import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { CustomCard } from "../CustomCard/CustomCard";
import { css } from "@emotion/react";
import { useShouldComponentDisplay } from "../../hooks/useShouldComponentDisplay";
import Button from "@mui/material/Button";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";

export const FinalConfirmation: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const { send } = applicationService;

  const shouldDisplayComponent = useShouldComponentDisplay("finalConfirmation");
  if (!shouldDisplayComponent) {
    return null;
  }

  const handleButtonClick = () => {
    send("NEXT-PAGE");
  };

  return (
    <CustomCard>
      <Typography variant={"body1"} css={thankYouText}>
        Thank you, that's all we wanted you to confirm at the moment.
      </Typography>
      <Button variant={"contained"} onClick={handleButtonClick}>
        Proceed to the next step
      </Button>
    </CustomCard>
  );
};

const thankYouText = css({
  marginBottom: "1rem"
});
