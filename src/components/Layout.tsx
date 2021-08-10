import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const MainWrap = styled(Box)({
  backgroundColor: "#F1F3F4",
  display: "flex",
  // height: "100vh",
  height: "100%",
});

const Main = styled(Box)({
  paddingLeft: "30px",
  paddingRight: "30px",
  flex: 1,
  overflow: "scroll",
});

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <MainWrap>
      <LeftBar></LeftBar>
      <Main component="main">
        <TopBar></TopBar>
        {children}
      </Main>
    </MainWrap>
  );
}
