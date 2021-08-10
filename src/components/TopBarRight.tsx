import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const TopBarRightWrap = styled(Box)({
  display: "flex",
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
});

const ProfilePhoto = styled(Box)({
  width: "60px",
  height: "58px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "20px",
});

const NotificationBellWrap = styled(Box)({
  position: "relative",
  margin: "0 40px",

  "& > span": {
    width: "14px",
    height: "14px",
    position: "absolute",
    right: "-7px",
    top: "-16px",
    borderRadius: "50%",
    fontSize: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#663399",
    color: "#fff",
  },
});

const ArrowCrossImg = styled("img")({
  width: "15.74px",
  height: "15.74px",
});

export default function TopBarRight() {
  return (
    <TopBarRightWrap sx={{ justifyContent: { md: "flex-end" } }}>
      <ArrowCrossImg src="/image/arrow-cross.png"></ArrowCrossImg>

      <NotificationBellWrap>
        <img src="/image/bell.png" alt="notification bell icon" />
        <span>3</span>
      </NotificationBellWrap>

      <ProfilePhoto
        sx={{ backgroundImage: "url('/image/user-photo.png')" }}
      ></ProfilePhoto>
    </TopBarRightWrap>
  );
}
