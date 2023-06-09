import { FC, useState, useRef } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

import ToggleButton from 'components/UI/toggle-button/ToggleButton';
import Range from 'components/UI/range/Range';
import Notification from 'components/UI/notification/Notification';

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

  const outputPassRef = useRef<HTMLSpanElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  const generate = () => {
    setPassword(
      generatePassword(charLength, {
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols,
      })
    );
  };

  const copyPassword = () => {
    if (outputPassRef.current) {
      navigator.clipboard.writeText(outputPassRef.current.textContent || '').then(() => {
        if (notificationRef.current) {
          notificationRef.current.style.left = '20px';
        }

        setTimeout(() => {
          if (notificationRef.current) {
            notificationRef.current.style.left = '-100%';
          }
        }, 3000);
      });
    }
  };

  return (
    <div>
      <h1 className="mb-[25px] text-center text-xl text-[#888597]">Password Generator</h1>
      {password && (
        <>
          <div className="flex justify-between items-center flex-col gap-[15px] mb-[20px] px-[25px] py-[15px] bg-[#24232b] min-[380px]:flex-row">
            <span className="text-lg text-white min-[330px]:text-xl" ref={outputPassRef}>
              {password}
            </span>
            <button onClick={copyPassword}>
              <img src={copy} alt="Copy" />
            </button>
          </div>
          <PasswordStrengthBar
            className="mb-[25px]"
            password={password}
            barColors={['#ddd', '#b04202', '#f6b44d', '#2b90ef', '#82df8e']}
          />
        </>
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
        <button className={styles.btn} onClick={generate}>
          <span className="uppercase text-[#acfdb1]">generate</span>
          <span>
            <img className="transition-all duration-200" src={arrow} alt="Arrow" />
          </span>
        </button>
      </div>
      <Notification ref={notificationRef} />
    </div>
  );
};

export default PasswordGenerator;
