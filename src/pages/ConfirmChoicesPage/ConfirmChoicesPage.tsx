import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import { Choices } from "./components/Choices/Choices";
import Typography from "@mui/material/Typography";
import { ActionButtons } from "./components/ActionButtons/ActionButtons";
import { ApiCallSimulator } from "./components/ApiCallSimulator/ApiCallSimulator";
import { ApiFailError } from "./components/ApiFailError/ApiFailError";

export const ConfirmChoicesPage: React.FC = () => {
  return (
    <>
      <ApiFailError />
      <Box>
        <Card>
          <CardHeader title={"Confirm your choices"} />
          <CardContent>
            <Typography css={aboveTableText} variant="body1" component="h2">
              Below is the summary of your choices. Please review them carefully
              and confirm once correct.
            </Typography>
            <Choices />
          </CardContent>
          <CardActions>
            <ActionButtons />
          </CardActions>
        </Card>
      </Box>
      <ApiCallSimulator />
    </>
  );
};

const aboveTableText = css({
  marginBottom: "1rem"
});
