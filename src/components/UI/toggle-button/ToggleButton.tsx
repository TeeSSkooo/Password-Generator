import { FC, useState } from 'react';

import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  checked: boolean;
  onChange: (include: boolean) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="relative">
      <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className={styles.toggleBtn}>
        <div className={styles.switcher}></div>
      </div>
    </div>
  );
};

export default ToggleButton;
