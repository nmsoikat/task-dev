import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const TopBarLeftWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const MenuSymbol = styled(Box)({
  width: "16px",
  marginRight: "40px",

  "& span": {
    backgroundColor: "#663399",
    display: "block",
    height: "1px",
  },

  "& span:nth-child(2)": {
    margin: "5px 0",
  },
});

const SearchBoxWrap = styled(Box)({
  position: "relative",

  "& > img": {
    width: "14px",
    height: "14px",
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

const SearchBox = styled("input")({
  backgroundColor: "#fff",
  borderRadius: "20px",
  height: "50px",
  outline: "none",
  border: "none",
  padding: "16px",
  paddingLeft: 16 + 14 + 5 + "px",
  fontSize: "12px",
  // width: "503px",

  "&::placeholder": {
    color: "#949494",
  },
});

export default function TopBarLeft() {
  return (
    <TopBarLeftWrap sx={{ mb: { xs: 4, md: 0 } }}>
      <MenuSymbol>
        <span></span>
        <span></span>
        <span></span>
      </MenuSymbol>

      <SearchBoxWrap>
        <SearchBox
          type="text"
          placeholder="Search"
          sx={{ width: { xs: "100%", sm: "350px", lg: "503px" } }}
        ></SearchBox>
        <img src="/image/search-icon.png" alt="search icon" />
      </SearchBoxWrap>
    </TopBarLeftWrap>
  );
}
