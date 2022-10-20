import React from "react";
import List from "@mui/material/List";
import { TransportationTypeListItem } from "./TransportationTypeListItem";

export const TransportationTypeList: React.FC = () => {
  return (
    <List>
      {transportationTypes.map(transportation => (
        <TransportationTypeListItem
          key={transportation.transportationType}
          {...transportation}
        />
      ))}
    </List>
  );
};

const transportationTypes = [
  { transportationType: "air", title: "Aircraft" },
  { transportationType: "mass", title: "Train / Bus" },
  { transportationType: "car", title: "Private car" }
];
