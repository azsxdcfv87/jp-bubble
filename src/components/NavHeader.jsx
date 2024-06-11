import React from 'react';
import styles from '../../styles/NavHeader.module.css';

const NavHeader = () => (
  <nav style={styles.navHeader}>
    <div style={styles.navHeaderAll}>
      <div style={styles.navHeaderCenter}>
        <div style={styles.navHeaderTab}>
          <a style={styles.navHeaderTabLink} href="/" data-id="home-tab">
            <div style={styles.homeTab}>首頁</div>
          </a>
          <a style={styles.navHeaderTabLink} href="area-tab" data-id="area-tab">
            <div style={styles.areaTab}>地區選擇</div>
          </a>
          <a style={styles.navHeaderTabLink} href="service-tab" data-id="service-tab">
            <div style={styles.serviceTab}>服務介紹</div>
          </a>
          <a style={styles.navHeaderTabLink} href="form-tab" data-id="form-tab">
            <div style={styles.formTab}>表單填寫</div>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavHeader;
