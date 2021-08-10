import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import LeftBarBrand from "./LeftBarBrand";
import LeftBarMenu from "./LeftBarMenu";

const LeftSection = styled(Box)({
  backgroundColor: "#663399",
  width: "125px",
  position: "fixed",
  left: "0",
  top: "0",
  marginLeft: "0",

  maxHeight: "100vh",
  overflowY: "auto",
  /* width */
  "&::-webkit-scrollbar": {
    width: "5px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "#7D48B1",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    // background: "#9f48B1",
    background: "#552b5e",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#552b5e",
    cursor: "pointer",
  },
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
