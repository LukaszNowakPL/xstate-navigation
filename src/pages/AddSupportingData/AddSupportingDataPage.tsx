import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { SecurityPhoneNumber } from "./components/SecurityPhoneNumber/SecurityPhoneNumber";
import { ActionButtons } from "./components/ActionButtons/ActionButtons";

export const AddSupportingDataPage: React.FC = () => {
  return (
    <Box css={cardWrapper}>
      <FormContainer>
        <Card>
          <CardHeader title={"Add supporting data"} />
          <CardContent>
            <SecurityPhoneNumber />
          </CardContent>
          <CardActions>
            <ActionButtons />
          </CardActions>
        </Card>
      </FormContainer>
    </Box>
  );
};

const cardWrapper = css({
  marginBottom: "1rem"
});
