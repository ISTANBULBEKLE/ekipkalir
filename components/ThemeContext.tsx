import { createContext, useContext, useState } from 'react';

interface ThemeContextProps {
  theme: {
    name: 'light' | 'dark';
    backgroundColor: string;
    textColor: string;
  };
  toggleTheme: () => void;
  toggleTextColor: () => void; 
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: {
    name: 'light',
    backgroundColor: '#fff',
    textColor: '#333',
  },
  toggleTheme: () => {},
  toggleTextColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleTextColor = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      textColor: prevTheme.name === 'light' ? '#f0f0f0' : '#333',
    }));
  };
  const themeConfig = {
    name: theme,
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    textColor: theme === 'light' ? '#333' : '#f0f0f0',
  };

  return (
    <ThemeContext.Provider value={{ theme: themeConfig, toggleTheme, toggleTextColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;