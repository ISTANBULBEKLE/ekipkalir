import React from 'react';
import { useTheme } from './ThemeContext';
import switchStyles from '@/styles/Switch.module.css';

interface SwitchProps {
  style?: React.CSSProperties;
}

const Switch: React.FC<SwitchProps> = ({style}): JSX.Element => {
  const { theme, toggleTheme, toggleTextColor } = useTheme();

  const handleToggle = () => {
    toggleTheme && toggleTheme();
    toggleTextColor && toggleTextColor();
  };

  return (
    <label className={switchStyles.switch} style={style}>
      <input type="checkbox" checked={theme.name === 'dark'} onChange={handleToggle} />
      <span className={`${switchStyles.slider} ${switchStyles.round}`}></span>
    </label>
  );
};

export default Switch;