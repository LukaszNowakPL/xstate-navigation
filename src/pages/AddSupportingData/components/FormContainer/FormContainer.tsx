import React, { useContext } from "react";
import { Form } from "react-final-form";
import { validate } from "./FormContainer.helpers";
import { useSupportingDataFormContext } from "../../../../context/AppContext/Context/useSupportingDataFormContext";
import { SupportingDataform } from "../../../../utils/types";
import { ApplicationMachineContext } from "../../../../context/StateMachines/StateMachines.context";

export const FormContainer: React.FC = ({ children }) => {
  const { supportingDataFormData } = useSupportingDataFormContext();
  const { applicationService } = useContext(ApplicationMachineContext);
  const { send } = applicationService;

  const handleValidation = (values: SupportingDataform) => {
    const validationResult = validate(values);
    send(Object.keys(validationResult).length > 0 ? "INVALIDATE" : "VALIDATE");
    return validationResult;
  };
  return (
    <Form
      initialValues={supportingDataFormData}
      onSubmit={() => {}}
      validate={handleValidation}
      render={() => <form>{children}</form>}
    />
  );
};
