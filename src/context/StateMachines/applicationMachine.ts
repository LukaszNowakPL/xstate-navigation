import { assign, createMachine } from "xstate";

const isTransportationSelected = (context: MachineContext) => {
  return Boolean(context.selectedTransportationType);
};

interface MachineContext {
  selectedTransportationType?: string;
}
interface ChangeTransportationEvent {
  type: "CHANGE-TRANSPORTATION";
  transportationType: string;
}

type MachineEvents =
  | { type: "PREV-PAGE" }
  | { type: "NEXT-PAGE" }
  | ChangeTransportationEvent
  | { type: "NEXT-STEP" }
  | { type: "INVALIDATE" }
  | { type: "VALIDATE" }
  | { type: "INIT-API-CALL" }
  | { type: "REJECT" }
  | { type: "RESOLVE" };

export const applicationMachine = createMachine(
  {
    id: "applicationMachine",
    context: {},
    schema: {
      context: {} as MachineContext,
      events: {} as MachineEvents
    },
    initial: "choose-transportation",
    type: "compound",
    states: {
      "choose-transportation": {
        type: "compound",
        initial: "selectTransportationType",
        states: {
          selectTransportationType: {
            type: "compound",
            initial: "unknown",
            states: {
              unknown: {
                always: [
                  {
                    target: "transportationSelected",
                    cond: "isTransportationSelected"
                  },
                  {
                    target: "transportationNotSelected"
                  }
                ]
              },
              transportationNotSelected: {
                on: {
                  "CHANGE-TRANSPORTATION": {
                    target: "transportationSelected",
                    actions: assign<MachineContext, ChangeTransportationEvent>(
                      (context, event) => {
                        return {
                          selectedTransportationType: event.transportationType
                        };
                      }
                    )
                  }
                }
              },
              transportationSelected: { type: "final" }
            },
            onDone: "bestOption"
          },
          bestOption: {
            on: {
              "NEXT-STEP": "goodRepresentation",
              "CHANGE-TRANSPORTATION": {
                target: "bestOption",
                actions: assign<MachineContext, ChangeTransportationEvent>(
                  (context, event) => {
                    return {
                      selectedTransportationType: event.transportationType
                    };
                  }
                )
              }
            }
          },
          goodRepresentation: {
            on: {
              "NEXT-STEP": "finalConfirmation",
              "CHANGE-TRANSPORTATION": {
                target: "bestOption",
                actions: assign<MachineContext, ChangeTransportationEvent>(
                  (context, event) => {
                    return {
                      selectedTransportationType: event.transportationType
                    };
                  }
                )
              }
            }
          },
          finalConfirmation: {
            on: {
              "CHANGE-TRANSPORTATION": {
                target: "bestOption",
                actions: assign<MachineContext, ChangeTransportationEvent>(
                  (context, event) => {
                    return {
                      selectedTransportationType: event.transportationType
                    };
                  }
                )
              },
              "NEXT-PAGE": "allDone"
            }
          },
          allDone: {
            type: "final"
          }
        },
        onDone: "add-supporting-data"
      },
      "add-supporting-data": {
        type: "compound",
        initial: "unknown",
        states: {
          unknown: {
            on: {
              VALIDATE: "validated",
              INVALIDATE: "nonValidated"
            }
          },
          validated: {
            on: {
              INVALIDATE: "nonValidated",
              "NEXT-PAGE": "allDone"
            }
          },
          nonValidated: {
            on: { VALIDATE: "validated" }
          },
          allDone: {
            type: "final"
          }
        },
        onDone: "confirm-choices",
        on: {
          "PREV-PAGE": "choose-transportation.finalConfirmation"
        }
      },
      "confirm-choices": {
        type: "compound",
        initial: "idle",
        states: {
          idle: {
            on: {
              "INIT-API-CALL": "pending"
            }
          },
          pending: {
            on: {
              REJECT: "rejected",
              RESOLVE: "resolved"
            }
          },
          rejected: {
            on: {
              "INIT-API-CALL": "pending"
            }
          },
          resolved: {
            type: "final"
          }
        },
        onDone: "thank-you",
        on: {
          "PREV-PAGE": "add-supporting-data"
        }
      },
      "thank-you": {
        type: "final"
      }
    }
  },
  {
    guards: {
      isTransportationSelected: isTransportationSelected
    }
  }
);
