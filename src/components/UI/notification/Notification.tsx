import { FC, ForwardedRef, forwardRef } from 'react';

import check from 'assets/check.svg';

import styles from './Notification.module.css';

const Notification = forwardRef<HTMLDivElement>((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.notification} ref={ref}>
      <div className="text-white">Password was copied!</div>
      <img src={check} alt="Check" />
    </div>
  );
});

export default Notification;
