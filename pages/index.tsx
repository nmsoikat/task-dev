import { Grid } from "@material-ui/core";
import Head from "next/head";
import DisplayBox from "../src/components/DisplayBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="admin panel dashboard page" />
      </Head>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-01.png"
            labelText="New  Leds"
            digit="205"
            color="colorNew"
          ></DisplayBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-02.png"
            labelText="Sales"
            digit="$4021"
            color="colorSales"
          ></DisplayBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-03.png"
            labelText="Orders"
            digit="80"
            color="colorOrders"
          ></DisplayBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-04.png"
            labelText="Expense"
            digit="$1200"
            color="colorExpense"
          ></DisplayBox>
        </Grid>
      </Grid>
    </>
  );
}
