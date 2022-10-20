import React from "react";
import Typography from "@mui/material/Typography";
import { CustomCard } from "../CustomCard/CustomCard";
import { useShouldComponentDisplay } from "../../hooks/useShouldComponentDisplay";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";

export const BestOption: React.FC = () => {
  const shouldDisplayComponent = useShouldComponentDisplay("bestOption");
  if (!shouldDisplayComponent) {
    return null;
  }

  return (
    <CustomCard title={"Best option"} actions={<ConfirmButton />}>
      <Typography variant={"body1"}>
        The selected option is the best in terms of cost-effectiveness and the
        environmental pollution it will cause.
      </Typography>
    </CustomCard>
  );
};
