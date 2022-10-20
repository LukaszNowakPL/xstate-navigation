import React from "react";
import { useField, Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import { SupportingDataform } from "../../../../utils/types";

export const SecurityPhoneNumber: React.FC = () => {
  const {
    input,
    meta: { error, touched }
  } = useField<SupportingDataform>("securityPhoneNumber");
  const isError = Boolean(touched) && Boolean(error);
  return (
    <Field {...input}>
      {props => {
        return (
          <TextField
            label="Security Phone Number"
            variant="outlined"
            required
            error={isError}
            fullWidth
            helperText={isError ? error : null}
            {...props.input}
          />
        );
      }}
    </Field>
  );
};
