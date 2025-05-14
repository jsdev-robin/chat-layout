import React, { createContext, useContext } from "react";
import { useElementDimensions } from "../hooks/useElementDimensions";

interface AppContextType {
  ref: (node: HTMLElement | null) => void;
  chatInputBoxRef: (node: HTMLElement | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { ref } = useElementDimensions({ h: "--header-h" });
  const { ref: chatInputBoxRef } = useElementDimensions({ h: "--input-h" });

  return (
    <AppContext.Provider value={{ ref, chatInputBoxRef }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
