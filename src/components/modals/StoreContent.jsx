import React from 'react';
import StonesData from '../data/StoneList.json';
import '../stylesheets/bodyContent.css';

const HomeContent = () => {
  // 將 StonesData 轉換為陣列
  const stonesArray = Array.isArray(StonesData) ? StonesData : [];

  return (
    <div className="StoneContent">
      <div className="ContentContainer">
        <h1 className="ContentHeader">
          深耕風俗
        </h1>
        <div className="ContentBoxAll">
          {stonesArray.map((stone, index) => (
            <div key={index} className="ContentBox">
              <a href={stone.url} className={`jp-link ${stone.id}`}>
                <img src={stone.image} alt="JP Bubble" />
              </a>
              <span className="ContentTitle">
                {stone.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

