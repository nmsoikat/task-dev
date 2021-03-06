import { Box, styled } from "@material-ui/core";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";

const TopWrap = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "30px 0",
  flexDirection: "column",
  alignItems: "center",
});

type topBarProps = {
  leftBarHandler: any;
};

export default function TopBar({ leftBarHandler }: topBarProps) {
  return (
    <TopWrap component="section" sx={{ flexDirection: { md: "row" } }}>
      <TopBarLeft leftBarHandler={leftBarHandler}></TopBarLeft>
      <TopBarRight></TopBarRight>
    </TopWrap>
  );
}
