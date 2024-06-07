import React from 'react';
import { styles } from '../../styles/nav.module.css';

const MainContent = () => (
  <div style={styles.mainContent}>
    <div style={styles.bodyImageContainer}>
      <div style={styles.titleContainer}>
        <div style={styles.gridContainer}>
          <div style={styles.jpBubbleContent}>
            <div style={styles.bodyImageContent}>
              <div style={styles.centeredText}>
                日本在地泡泡浴領路人
              </div>
              <img style={styles.styledBodyImage} src="images/home_page_image_web.png" alt="JP Bubble" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainContent;
