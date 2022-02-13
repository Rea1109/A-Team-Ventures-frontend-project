import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import DrawersMenu from "./DrawerMenu";
import { useState, KeyboardEvent, MouseEvent } from "react";

const MenuButton = styled(IconButton)`
  display: none;

  @media all and (max-width: 414px) {
    display: inherit;
  }
`;

const InfoButton = styled(Button)`
  img {
    margin-right: 10px;
  }
  @media all and (max-width: 414px) {
    display: none;
  }
`;

const InfoIcon = styled.span`
  margin: 0px 10px;
  @media all and (max-width: 414px) {
    display: none;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      setIsOpen(!isOpen);
    };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ width: "100%", maxWidth: "1400px" }}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(false)}
          >
            <MenuIcon />
          </MenuButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ lineHeight: "10px" }}
          >
            <img src="/images/logo.png" alt="" />
          </Typography>
          <InfoButton color="inherit">
            <img src="/images/company-icon.png" alt="company-images" />
            A가공업체
          </InfoButton>
          <InfoIcon>|</InfoIcon>
          <InfoButton color="inherit">로그아웃</InfoButton>
        </Toolbar>
      </AppBar>
      <DrawersMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
