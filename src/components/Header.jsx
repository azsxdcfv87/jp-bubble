import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <NavHeader>
      <NavHeaderAll>
        <NavHeaderLeft>
          <NavHeaderTab>
            <NavHeaderTabLink>
              <NavHeaderTab>首頁</NavHeaderTab>
            </NavHeaderTabLink>
            <NavHeaderTabLink>
              <NavHeaderTab>地區選擇</NavHeaderTab>
            </NavHeaderTabLink>
            <NavHeaderTabLink>
              <NavHeaderTab>服務介紹</NavHeaderTab>
            </NavHeaderTabLink>
          </NavHeaderTab>
        </NavHeaderLeft>
      </NavHeaderAll>
    </NavHeader>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const navHeader = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const NavHeader = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const NavHeaderAll = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const NavHeaderLeft = styled.div`
  display: flex;
  padding-top: 14px;
`;

const NavHeaderTab = styled.div`
  display: flex;
  margin-left: 20px;
`;

const NavHeaderTabLink = styled.div`
  display: flex;
  align-items: center;
`;

const NavHeaderTabDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  padding: 0 12px 13px;
  margin-right: 4px;
`;

const HeaderShortsBadgeFree = styled.div`
  position: absolute;
  top: 10px;
  left: 333px;
  transform: rotate(10deg);
`;



export default Header;
