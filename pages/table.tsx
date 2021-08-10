import rootURL from "../config";
import Head from "next/head";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { tableCellClasses } from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type tableProps = {
  products: Array<{
    id: number;
    name: string;
    category: string;
    brand: string;
    price: string;
    quantity: string;
  }>;
};

function table({ products }: tableProps) {
  return (
    <>
      <Head>
        <title>Table Data</title>
      </Head>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Brand</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {product.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {product.category}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {product.brand}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {product.price}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {product.quantity}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default table;

export const getStaticProps = async () => {
  const res = await fetch(`${rootURL}/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
