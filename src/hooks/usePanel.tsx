import React, { createContext, useCallback, useState, useContext } from 'react';

interface CurrentPanel {
  children: React.ReactNode;
  id: string;
}
interface PanelProps {
  currentPanel: CurrentPanel;
  setPanel(panelName: CurrentPanel): void;
}
const Panel = createContext<PanelProps>({} as PanelProps);

const PanelControllerProvider = ({ children }) => {
  const [currentPanel, setCurrentPanel] = useState<CurrentPanel>(null);

  const setPanel = useCallback(
    (panelName: CurrentPanel) => setCurrentPanel(panelName),
    [],
  );

  return (
    <Panel.Provider
      value={{
        currentPanel,
        setPanel,
      }}
    >
      {children}
    </Panel.Provider>
  );
};

const usePanel = (): PanelProps => {
  const context = useContext(Panel);

  if (!context) {
    throw new Error('usePanel must be used within an Panel');
  }

  return context;
};

export { usePanel, PanelControllerProvider };
