import { AppActions } from "./AppContextActions/AppContextActions";
import { AppStateValues } from "./AppContext";
import produce, { Draft } from "immer";

export const AppContextReducer = produce(
  (draft: Draft<AppStateValues>, action: AppActions): void => {
    switch (action.type) {
      case "STORE_SUPPORTING_DATA_FORM":
        draft.supportingDataFormData = action.formData;
        break;
    }
  }
);
