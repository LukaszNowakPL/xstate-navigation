import { AppContext } from "./AppContext";
import { useCallback, useContext } from "react";
import { SupportingDataform } from "../../../utils/types";
import { storeSupportingDataForm } from "./AppContextActions/SupportingDataFormActions";

export const useSupportingDataFormContext = () => {
  const [appState, dispatch] = useContext(AppContext);
  const { supportingDataFormData } = appState;

  return {
    supportingDataFormData,
    storeSupportingDataForm: useCallback(
      (dataForm: SupportingDataform) =>
        dispatch(storeSupportingDataForm(dataForm)),
      [dispatch]
    )
  };
};
