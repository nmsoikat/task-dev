import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import LeftBarBrand from "./LeftBarBrand";
import LeftBarMenu from "./LeftBarMenu";

const LeftSection = styled(Box)({
  backgroundColor: "#663399",
  width: "125px",
  position: "fixed",
  top: "0",
  marginLeft: "0",
  maxHeight: "100vh",
  overflowY: "auto",
  transition: ".2s",

  /* width */
  "&::-webkit-scrollbar": {
    width: "5px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "#663399",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "#7D48B1",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#9f48B1",
  },

  "&.on": {
    left: "0",
  },

  "&.off": {
    left: "-125px",
  },
});

type leftBarProps = {
  leftBarHandlerClass: string;
};

export default function LeftBar({ leftBarHandlerClass }: leftBarProps) {
  return (
    <LeftSection
      component="aside"
      className={leftBarHandlerClass}
      // sx={{ marginLeft: { md: 0 }, position: { md: "relative" } }}
    >
      <LeftBarBrand></LeftBarBrand>
      <LeftBarMenu></LeftBarMenu>
    </LeftSection>
  );
}
