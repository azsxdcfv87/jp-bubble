import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './modals/Home';
// import About from './modals/About';
// import Area from './modals/Area';
// import Service from './modals/Contact';
// import Form from './modals/Form';
import './stylesheets/nav.css'; // 匯入您的 CSS 文件

const NavHeader = () => (
  <nav className="NavHeader">
    <div className="NavHeaderAll">
      <div className="NavHeaderCenter">
        <div className="NavHeaderTab">
          <Link className="NavHeaderTabLink" to="/home" data-id="home-tab">
            <div className="homeTab">首頁</div>
          </Link>
          <Link className="NavHeaderTabLink" to="/about" data-id="about-tab">
            <div className="AboutTab">關於我們</div>
          </Link>
          <Link className="NavHeaderTabLink" to="/area" data-id="area-tab">
            <div className="AreaTab">地區選擇</div>
          </Link>
          <Link className="NavHeaderTabLink" to="/service" data-id="service-tab">
            <div className="ServiceTab">服務介紹</div>
          </Link>
          <Link className="NavHeaderTabLink" to="/Contact" data-id="Contact-tab">
            <div className="ContactTab">聯繫我們</div>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavHeader;


