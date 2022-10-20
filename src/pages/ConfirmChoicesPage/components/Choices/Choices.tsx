import React, { useContext } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getTransportationTypeName } from "./Choices.helpers";
import { useSupportingDataFormContext } from "../../../../context/AppContext/Context/useSupportingDataFormContext";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";
import { useSelector } from "@xstate/react";

export const Choices: React.FC = () => {
  const { applicationService } = useContext(ApplicationMachineContext);
  const transportationType = useSelector(
    applicationService,
    getSelectedTransportationContext
  );
  const {
    supportingDataFormData: { securityPhoneNumber }
  } = useSupportingDataFormContext();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Type of transportation:
            </TableCell>
            <TableCell>
              {getTransportationTypeName(transportationType || "")}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Security phone number:
            </TableCell>
            <TableCell>{securityPhoneNumber}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

//@ToDo: typing
const getSelectedTransportationContext = (state: any) => {
  return state.context.selectedTransportationType;
};
