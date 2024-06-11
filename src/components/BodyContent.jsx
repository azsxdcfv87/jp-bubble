import React from 'react';
import './stylesheets/bodyContent.css';
import './stylesheets/bodyImage.css';

const BodyContent = () => (
  <div className="BodyImageContainer">
    <div className="TitleConTainer">
      <div className="gridContainer">
        <div className="JpBubbleContent">
          <div className="BodyImageContent">
            <div className="CenteredText">
              日本在地泡泡浴領路人
            </div>
            <img className="StyledBodyImage" src="images/home_page_image_web.png" alt="JP Bubble" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BodyContent;
