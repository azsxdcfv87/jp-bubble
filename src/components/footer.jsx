import React from "react";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.Footer_Content}>
        <div className={styles.Footer_Section}>
          <div className={styles.Footer_SectionItem}>
            <div className={styles.Footer_SectionTitle}>關於</div>
            <a href="" className={styles.Footer_SectionLink}>服務條款</a>
            <a href="" className={styles.Footer_SectionLink}>隱私權政策</a>
            <a href="" className={styles.Footer_SectionLink}>關於 jp bubble</a>
          </div>
          <div className={styles.Footer_SectionItem}>
            <div className={styles.Footer_SectionTitle}>客服與協助</div>
            <a href="" className={styles.Footer_SectionLink}>常見問答</a>
            <a href="" className={styles.Footer_SectionLink}>說明中心</a>
          </div>
          <div className={styles.Footer_SectionItem}>
            <div className={styles.Footer_SectionTitle}>異業合作</div>
            <a href="" className={styles.Footer_SectionLink}>聯盟夥伴計畫</a>
            <a href="" className={styles.Footer_SectionLink}>業務合作洽談</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
