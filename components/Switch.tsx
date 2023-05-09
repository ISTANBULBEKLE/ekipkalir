import { useTheme } from './ThemeContext';
import switchStyles from '@/styles/Switch.module.css';

interface SwitchProps {
  style?: React.CSSProperties;
  defaultChecked?: boolean;
  onChange?: () => void;
}

const Switch: React.FC<SwitchProps> = (): JSX.Element => {
  const { theme, toggleTheme, toggleTextColor } = useTheme();

  const handleToggle = () => {
    toggleTheme && toggleTheme();
    toggleTextColor && toggleTextColor();
  };

  return (
    <label className={switchStyles.switch}>
      <input type="checkbox" checked={theme === 'dark'} onChange={handleToggle} />
      <span className={`${switchStyles.slider} ${switchStyles.round}`}></span>
    </label>
  );
};

export default Switch;