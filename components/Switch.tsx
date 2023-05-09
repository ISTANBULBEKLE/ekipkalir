import { useTheme } from './ThemeContext';
import switchStyles from '@/styles/Switch.module.css';

const Switch: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={switchStyles.switch}>
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className={`${switchStyles.slider} ${switchStyles.round}`}></span>
    </label>
  );
};

export default Switch;