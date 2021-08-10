import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import LeftBarBrand from "./LeftBarBrand";
import LeftBarMenu from "./LeftBarMenu";

const LeftSection = styled(Box)({
  backgroundColor: "#663399",
  width: "120px",
  // marginLeft: "-120px",
  // position: "fixed",
  // left: "0",
  // top: "0",
  marginLeft: "0",
});

export default function LeftBar() {
  return (
    <LeftSection
      component="aside"
      // sx={{ marginLeft: { md: 0 }, position: { md: "relative" } }}
    >
      <LeftBarBrand></LeftBarBrand>
      <LeftBarMenu></LeftBarMenu>
    </LeftSection>
  );
}
