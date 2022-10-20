import React, { useContext } from "react";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

export const ApiFailError: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const isRejected = useSelector(applicationService, getIsRejected);

  if (!isRejected) {
    return null;
  }

  return (
    <Box css={cardWrapper}>
      <Alert severity={"warning"}>
        There was some error. Please try to send the request again.
      </Alert>
    </Box>
  );
};

//@ToDo: typing
const getIsRejected = (state: any) => {
  return state.matches("confirm-choices.rejected");
};

const cardWrapper = css({
  marginBottom: "1rem"
});
