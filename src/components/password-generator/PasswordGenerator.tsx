import { FC, useState } from 'react';

import ToggleButton from 'components/UI/toggle-button/ToggleButton';
import Range from 'components/UI/range/Range';

import generatePassword from 'utils/generatePassword';

import copy from 'assets/copy.svg';
import arrow from 'assets/arrow.svg';

import styles from './PasswordGenerator.module.css';

const PasswordGenerator: FC = () => {
  const [password, setPassword] = useState<string>('');
  const [charLength, setCharLength] = useState<number>(6);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  const handleClick = () => {
    setPassword(
      generatePassword(charLength, {
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols,
      })
    );
  };

  return (
    <div>
      <h1 className="mb-[25px] text-center text-xl text-[#888597]">Password Generator</h1>
      {password && (
        <div className="flex justify-between items-center flex-col gap-[15px] mb-[20px] px-[25px] py-[15px] bg-[#24232b] min-[380px]:flex-row">
          <span className="text-lg text-white min-[330px]:text-xl">{password}</span>
          <button>
            <img src={copy} alt="Copy" />
          </button>
        </div>
      )}
      <div className="p-[25px] bg-[#24232b]">
        <div className="mb-[20px] flex justify-between items-center">
          <div className="text-white sm:text-lg">Character Length</div>
          <div className="text-3xl text-[#acfdb1]">{charLength}</div>
        </div>
        <Range charLength={charLength} min={6} max={20} onChangeValue={setCharLength} />
        <div className="py-[25px]">
          <div className={styles.checkbox}>
            <ToggleButton checked={includeUppercase} onChange={setIncludeUppercase} />
            <span className={styles.label}>Include Uppercase Letters</span>
          </div>
          <div className={styles.checkbox}>
            <ToggleButton checked={includeLowercase} onChange={setIncludeLowercase} />
            <span className={styles.label}>Include Lowercase Letters</span>
          </div>
          <div className={styles.checkbox}>
            <ToggleButton checked={includeNumbers} onChange={setIncludeNumbers} />
            <span className={styles.label}>Include Numbers</span>
          </div>
          <div className={styles.checkbox}>
            <ToggleButton checked={includeSymbols} onChange={setIncludeSymbols} />
            <span className={styles.label}>Include Symbols</span>
          </div>
        </div>
        <button className={styles.btn} onClick={handleClick}>
          <span className="uppercase text-[#acfdb1]">generate</span>
          <span>
            <img className="transition-all duration-200" src={arrow} alt="Arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
