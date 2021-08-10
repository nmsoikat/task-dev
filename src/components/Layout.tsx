import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useState } from "react";

const MainWrap = styled(Box)({
  backgroundColor: "#F1F3F4",
  display: "flex",
  height: "100vh",
});

const Main = styled(Box)({
  marginLeft: "125px",
  paddingLeft: "30px",
  paddingRight: "30px",
  flex: 1,
  overflow: "auto",
  transition: ".2s",

  "&.off": {
    marginLeft: "0",
  },
});

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  const [toggleClass, setToggleClass] = useState("on");

  const leftBarHandler = () => {
    if (toggleClass === "on") {
      setToggleClass("off");
    } else {
      setToggleClass("on");
    }
  };

  return (
    <MainWrap>
      <LeftBar leftBarHandlerClass={toggleClass}></LeftBar>
      <Main component="main" className={toggleClass}>
        <TopBar leftBarHandler={leftBarHandler}></TopBar>
        {children}
      </Main>
    </MainWrap>
  );
}
