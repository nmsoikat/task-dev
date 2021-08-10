import Image from "next/image";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const Item = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "24px",
  padding: "30px 20px",
  display: "flex",
  alignItems: "center",
  height: "100%",

  "&.colorSales .iconBG": {
    backgroundColor: "#C5DBFF",
  },

  "&.colorSales h2": {
    color: "#3981F7",
  },

  "&.colorOrders .iconBG": {
    backgroundColor: "#BCDDB3",
  },

  "&.colorOrders h2": {
    color: "#5DAE49",
  },

  "&.colorExpense .iconBG": {
    backgroundColor: "#FFF6E0",
  },

  "&.colorExpense h2": {
    color: "#FFC620",
  },
});

const IconWrap = styled(Box)({
  backgroundColor: "#F2F1FE",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "18px",
  width: "36px",
  height: "100%",
});

const DataWrap = styled(Box)({
  marginLeft: "15px",

  "& p": {
    fontSize: "14px",
    color: "#43454D",
  },

  "& h2": {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#663399",
  },
});

type DisplayBoxProps = {
  imgUrl: any;
  labelText: string;
  digit: string;
  color: string;
};

export default function DisplayBox({
  imgUrl,
  labelText,
  digit,
  color,
}: DisplayBoxProps) {
  return (
    <Item className={color}>
      <IconWrap className="iconBG">
        <img src={imgUrl} alt={labelText} />
      </IconWrap>

      <DataWrap>
        <Typography component="p">{labelText}</Typography>
        <Typography component="h2">{digit}</Typography>
      </DataWrap>
    </Item>
  );
}
