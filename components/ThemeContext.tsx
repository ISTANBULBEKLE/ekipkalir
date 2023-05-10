import React, { createContext, useContext, useEffect, useState } from 'react';

interface Theme {
  name: 'light' | 'dark';
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  toggleTextColor: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: { name: 'light', backgroundColor: '#f5f5f5', textColor: '#333' },
  toggleTheme: () => {},
  toggleTextColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ name: 'light', backgroundColor: '#f5f5f5', textColor: '#333' });

  const toggleTheme = () => {
    const newTheme = theme.name === 'light'
      ? { name: 'dark', backgroundColor: '#333', textColor: '#f5f5f5' }
      : { name: 'light', backgroundColor: '#f5f5f5', textColor: '#333' };
    setTheme(prevTheme => ({ ...prevTheme, ...newTheme, name: newTheme.name as Theme['name'] }));
  };

  const toggleTextColor = () => {
    const newTextColor = theme.textColor === '#333' ? '#f5f5f5' : '#333';
    const newTheme = { ...theme, textColor: newTextColor };
    setTheme(newTheme);
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
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleTextColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;