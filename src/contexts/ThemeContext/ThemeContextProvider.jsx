import { ThemeContext } from "@/contexts/ThemeContext/themeContext";
import React, { useMemo, useState } from "react";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
