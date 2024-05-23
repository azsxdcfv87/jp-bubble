import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <NavHeader>
      <NavHeaderAll>
        <NavHeaderCenter>
          <NavHeaderTab>
            <NavHeaderTabLink href="#">
              <NavHeaderTab>首頁</NavHeaderTab>
            </NavHeaderTabLink>
            <NavHeaderTabLink href="#">
              <NavHeaderTab>地區選擇</NavHeaderTab>
            </NavHeaderTabLink>
            <NavHeaderTabLink href="#">
              <NavHeaderTab>服務介紹</NavHeaderTab>
            </NavHeaderTabLink>
            <NavHeaderTabLink href="#">
              <NavHeaderTab>表單填寫</NavHeaderTab>
            </NavHeaderTabLink>
          </NavHeaderTab>
        </NavHeaderCenter>
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

const NavHeader = styled.div.attrs({ className: 'NavHeader' })`
  display: flex;
  height: 64px;
  width: 100%;
  background-color: gray;
`;

const NavHeaderAll = styled.div.attrs({ className: 'NavHeaderAll' })`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

const NavHeaderCenter = styled.div.attrs({ className: 'NavHeaderCenter' })`
  display: flex;
  padding-top: 10px;
`;

const NavHeaderTab = styled.div.attrs({ className: 'NavHeaderTab' })`
  display: flex;
  margin-left: 18px;
`;

const NavHeaderTabLink = styled.a.attrs({ className: 'NavHeaderTabLink' })`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export default Header;
