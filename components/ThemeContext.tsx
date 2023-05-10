import React, { createContext, useContext, useEffect, useState } from 'react';

interface Theme {
  name: 'light' | 'dark';
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: { name: 'light', backgroundColor: '#f5f5f5', textColor: '#333' },
  toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ name: 'light', backgroundColor: '#f5f5f5', textColor: '#333' });

  const toggleTheme = () => {
    const newTheme: Theme = theme.name === 'light'
      ? { name: 'dark', backgroundColor: '#333', textColor: '#f5f5f5' }
      : { name: 'light', backgroundColor: '#f5f5f5', textColor: '#333' };
    setTheme(prevTheme => ({ ...prevTheme, ...newTheme }));
  };

  useEffect(() => {
    try {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setTheme(JSON.parse(localTheme));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;