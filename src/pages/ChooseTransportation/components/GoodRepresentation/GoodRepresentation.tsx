import React from "react";
import Typography from "@mui/material/Typography";
import { CustomCard } from "../CustomCard/CustomCard";
import { useShouldComponentDisplay } from "../../hooks/useShouldComponentDisplay";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";

export const GoodRepresentation: React.FC = () => {
  const shouldDisplayComponent = useShouldComponentDisplay(
    "goodRepresentation"
  );
  if (!shouldDisplayComponent) {
    return null;
  }

  return (
    <CustomCard title={"Good representation"} actions={<ConfirmButton />}>
      <Typography variant={"body1"}>
        During the trip, I undertake to respect all local laws and to represent
        the company's highest values.
      </Typography>
    </CustomCard>
  );
};
