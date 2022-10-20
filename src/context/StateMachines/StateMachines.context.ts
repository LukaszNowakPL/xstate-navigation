import { createContext } from "react";
import { InterpreterFrom } from "xstate";
import { applicationMachine } from "./applicationMachine";

export const ApplicationMachineContext = createContext({
  applicationService: {} as InterpreterFrom<typeof applicationMachine>
});
