import React from 'react';
import styles from '../../styles/index.module.css';

const BodyContainer = ({ Stones }) => {
  return (
    <div className={styles.BodyContainer}>
      <div className={styles.ContentContainer}>
        <h1 className={styles.ContentHeader}>
          深耕風俗
        </h1>
        <div className={styles.ContentBoxAll}>
          {Stones.map((stone, index) => (
            <div className={styles.ContentBox} key={index}>
              <a href={stone.url} className={`jp-link ${stone.id}`}>
                <img src={stone.image} alt="JP Bubble" />
              </a>
              <span className={styles.ContentTitle}>
                {stone.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyContainer;
