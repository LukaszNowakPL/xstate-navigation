import React from "react";
import Typography from "@mui/material/Typography";
import { CustomCard } from "../CustomCard/CustomCard";
import { TransportationTypeList } from "./TransportationTypeList";
import { TransportationTypeInfo } from "./TransportationTypeInfo";

export const TransportationType: React.FC = () => {
  return (
    <CustomCard title={"Select transportation type"}>
      <Typography variant={"body1"}>
        Please select type of transportation you want to utilize during your
        business trip:
      </Typography>
      <TransportationTypeList />
      <TransportationTypeInfo />
    </CustomCard>
  );
};
