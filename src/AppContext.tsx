import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [chatUrl, setChatUrl] = useState<string>("/chat/");
  const [chatTitle, setChatTitle] = useState<string>("");

  return (
    <AppContext.Provider value={{ chatUrl, setChatUrl, setChatTitle, chatTitle }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}