import { createContext, Dispatch, useReducer } from "react";
import { AppActions } from "./AppContextActions/AppContextActions";
import { AppContextReducer } from "./AppContextReducer";
import { SupportingDataform } from "../../../utils/types";

export interface AppStateValues {
  supportingDataFormData: SupportingDataform;
}

export const initialValues: AppStateValues = {
  supportingDataFormData: {}
};

const initialDispatch = () => {};

type AppContextValues = [AppStateValues, Dispatch<AppActions>];

export const AppContext = createContext<AppContextValues>([
  initialValues,
  initialDispatch
]);

export const AppContextProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={useReducer(AppContextReducer, initialValues)}>
      {children}
    </AppContext.Provider>
  );
};
