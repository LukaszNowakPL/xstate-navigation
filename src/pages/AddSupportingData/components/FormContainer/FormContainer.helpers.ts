import { SupportingDataform } from "../../../../utils/types";

export const validate = (values: SupportingDataform) => {
  let validationErrors: SupportingDataform = {};

  if (!Boolean(values.securityPhoneNumber)) {
    validationErrors.securityPhoneNumber =
      "Security Phone Number has to be provided.";
  }

  return validationErrors;
};
