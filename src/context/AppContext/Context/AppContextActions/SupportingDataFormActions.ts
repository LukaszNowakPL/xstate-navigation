import { SupportingDataform } from "../../../../utils/types";

export type SupportingDataFormActions = ReturnType<
  typeof storeSupportingDataForm
>;

export enum SupportingDataFormActionTypes {
  STORE_SUPPORTING_DATA_FORM = "STORE_SUPPORTING_DATA_FORM"
}

type StoreSupportingDataForm = {
  type: SupportingDataFormActionTypes.STORE_SUPPORTING_DATA_FORM;
  formData: SupportingDataform;
};

export const storeSupportingDataForm = (
  formData: SupportingDataform
): StoreSupportingDataForm => ({
  type: SupportingDataFormActionTypes.STORE_SUPPORTING_DATA_FORM,
  formData
});
