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

// const Body = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   overflow: hidden;
// `;

const NavHeader = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: gray;
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

export default Header;
