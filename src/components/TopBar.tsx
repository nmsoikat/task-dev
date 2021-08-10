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

export default function TopBar() {
  return (
    <TopWrap component="section" sx={{ flexDirection: { md: "row" } }}>
      <TopBarLeft></TopBarLeft>
      <TopBarRight></TopBarRight>
    </TopWrap>
  );
}
