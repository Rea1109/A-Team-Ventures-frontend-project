import Drawer from "@mui/material/Drawer";
import { KeyboardEvent, MouseEvent } from "react";
import styled from "@emotion/styled";

const DrawerWrapper = styled.div`
  width: 300px;
  height: 100%;

  ul {
    list-style: none;
    margin: 40px 0px;

    li {
      margin-bottom: 20px;
    }

    img {
      margin-right: 5px;
    }
  }
`;

const Hedaer = styled.div`
  margin: 20px 0px;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e5e5;
`;

const DrawersMenu = ({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}) => {
  return (
    <div>
      {isOpen && (
        <Drawer anchor="left" open={true} onClose={toggleDrawer(false)}>
          <DrawerWrapper>
            <Hedaer>
              <img src="/images/logo-blue.png" alt="" />
            </Hedaer>
            <ul>
              <li>
                <img src="/images/company-icon-black.png" alt="" />
                <span>파트너정밀가공</span>
              </li>
              <li>
                <span>로그아웃</span>
              </li>
            </ul>
          </DrawerWrapper>
        </Drawer>
      )}
    </div>
  );
};

export default DrawersMenu;
