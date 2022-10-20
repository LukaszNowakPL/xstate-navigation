import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";

interface TransportationTypeListItemProps {
  transportationType: string;
  title: string;
}

export const TransportationTypeListItem: React.FC<
  TransportationTypeListItemProps
> = ({ transportationType, title }) => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const selectedTransportationType = useSelector(
    applicationService,
    getSelectedTransportationContext
  );
  const { send } = applicationService;
  const handleOptionClick = () => {
    send("CHANGE-TRANSPORTATION", { transportationType });
  };
  return (
    <ListItem disablePadding>
      <ListItemButton
        selected={selectedTransportationType === transportationType}
        onClick={handleOptionClick}
      >
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

//@ToDo: typing
const getSelectedTransportationContext = (state: any) => {
  return state.context.selectedTransportationType;
};
