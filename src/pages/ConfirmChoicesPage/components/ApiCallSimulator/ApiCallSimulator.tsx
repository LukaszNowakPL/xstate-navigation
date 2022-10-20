import React, { useContext } from "react";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";

export const ApiCallSimulator: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const isPendingApiCall = useSelector(applicationService, getIsPendingApiCall);

  if (!isPendingApiCall) {
    return null;
  }
  const { send } = applicationService;

  const handleButtonClick = (action: "REJECT" | "RESOLVE") => {
    send(action);
  };

  return (
    <Box css={cardWrapper}>
      <Card>
        <CardContent>
          <Typography variant="body1" component="h3">
            Pending API call
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant={"contained"}
            onClick={() => handleButtonClick("REJECT")}
          >
            Reject
          </Button>
          <Button
            variant={"contained"}
            onClick={() => handleButtonClick("RESOLVE")}
          >
            Resolve
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

//@ToDo: typing
const getIsPendingApiCall = (state: any) => {
  return state.matches("confirm-choices.pending");
};

const cardWrapper = css({
  marginTop: "1rem"
});
