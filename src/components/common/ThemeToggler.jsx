import { useContext } from 'react';

import styles from './ThemeToggler.module.scss'
import useTheme from '../../hooks/useTheme';

import Switch from 'react-switch';

function ThemeToggler() {
  const {theme, toggleTheme} = useTheme();

  return (
    <label className={styles.toggleContainer}>
      <span className={styles.label}>Switch Theme</span>
      <Switch 
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </label>
  )
}

export default ThemeToggler
