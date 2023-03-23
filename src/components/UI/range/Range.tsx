import { FC, ChangeEvent, useState, useRef } from 'react';

import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from 'constants/password';

import styles from './Range.module.css';

interface RangeProps {
  charLength: number;
  min: number;
  max: number;
  onChangeValue: (value: number) => void;
}

const Range: FC<RangeProps> = ({ charLength, min, max, onChangeValue }) => {
  const [chars, setChars] = useState<number>(charLength);
  const rangeRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue: number = +event.currentTarget.value;

    const progressPercentage: number = +(
      ((targetValue - MIN_PASSWORD_LENGTH) / (MAX_PASSWORD_LENGTH - MIN_PASSWORD_LENGTH)) *
      100
    ).toFixed(0);
    const progressBgColor: string = `linear-gradient(90deg, #82df8e ${progressPercentage}%, #15141c 0%)`;

    if (rangeRef.current) {
      rangeRef.current.style.background = progressBgColor;
    }

    setChars(targetValue);
    onChangeValue(targetValue);
  };

  return (
    <input
      className={styles.range}
      type="range"
      min={min}
      max={max}
      value={chars}
      onChange={handleChange}
      ref={rangeRef}
    />
  );
};

export default Range;
