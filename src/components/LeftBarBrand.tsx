import { styled } from "@material-ui/core/styles";

const BrandName = styled("h2")({
  fontSize: "30px",
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center",
  marginTop: "30px",
  marginBottom: "40px",
});

export default function LeftBarBrand() {
  return <BrandName>Gull</BrandName>;
}
