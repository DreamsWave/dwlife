import * as React from "react";
import { createContext, useContext, useReducer } from "react";

type Action = { type: "pauseAnimations" };
type Dispatch = (action: Action) => void;
type State = {
  pauseAnimations: boolean;
};
type ControlsProviderProps = { children: React.ReactNode };

const ControlsContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function controlsReducer(state: State, action: Action) {
  switch (action.type) {
    case "pauseAnimations": {
      return { pauseAnimations: !state.pauseAnimations };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ControlsProvider({ children }: ControlsProviderProps) {
  const [state, dispatch] = useReducer(controlsReducer, {
    pauseAnimations: false,
  });
  const value = { state, dispatch };
  return (
    <ControlsContext.Provider value={value}>
      {children}
    </ControlsContext.Provider>
  );
}

function useControlsContext() {
  const context = useContext(ControlsContext);
  if (context === undefined) {
    throw new Error("useControlsContext must be used within a CountProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ControlsProvider, useControlsContext };
