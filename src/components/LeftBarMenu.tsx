import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = styled("ul")({
  margin: "0",
  display: "flex",
  flexDirection: "column",
  padding: "13px",

  "& a": {
    display: "block",
    color: "#fff",
    width: "94px",
    padding: "13px",
    textAlign: "center",
    transition: ".2s",
    marginBottom: "13px",
    textDecoration: "none",
  },

  "& a:last-child": {
    marginBottom: "0px",
  },

  "& a p": {
    visibility: "hidden",
    fontSize: "14px",
  },

  "& a img": {
    width: "30px",
  },

  "& a:hover, & a.active": {
    backgroundColor: "#7D48B1",
    borderRadius: "5px",

    "& p": {
      visibility: "visible",
    },
  },
});

export default function LeftBarMenu() {
  const router = useRouter();

  return (
    <Menu>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>
          <img src="/image/menu-icon-01.png" alt="dashboard" />
          <Typography>Dashboard</Typography>
        </a>
      </Link>

      <Link href="/table">
        <a className={router.pathname === "/table" ? "active" : ""}>
          <img src="/image/menu-icon-02.png" alt="table" />
          <Typography>Table</Typography>
        </a>
      </Link>

      <Link href="/Item3">
        <a className={router.pathname === "/Item3" ? "active" : ""}>
          <img src="/image/menu-icon-03.png" alt="Item3" />
          <Typography>Item3</Typography>
        </a>
      </Link>

      <Link href="/Item4">
        <a className={router.pathname === "/Item4" ? "active" : ""}>
          <img src="/image/menu-icon-04.png" alt="Item4" />
          <Typography>Item4</Typography>
        </a>
      </Link>

      <Link href="/Item5">
        <a className={router.pathname === "/Item5" ? "active" : ""}>
          <img src="/image/menu-icon-05.png" alt="Item5" />
          <Typography>Item5</Typography>
        </a>
      </Link>

      <Link href="/Item6">
        <a className={router.pathname === "/Item6" ? "active" : ""}>
          <img src="/image/menu-icon-06.png" alt="Item6" />
          <Typography>Item6</Typography>
        </a>
      </Link>

      <Link href="/Item7">
        <a className={router.pathname === "/Item7" ? "active" : ""}>
          <img src="/image/menu-icon-07.png" alt="Item7" />
          <Typography>Item7</Typography>
        </a>
      </Link>

      <Link href="/Item8">
        <a className={router.pathname === "/Item8" ? "active" : ""}>
          <img src="/image/menu-icon-08.png" alt="Item8" />
          <Typography>Item8</Typography>
        </a>
      </Link>

      <Link href="/Item9">
        <a className={router.pathname === "/Item9" ? "active" : ""}>
          <img src="/image/menu-icon-09.png" alt="Item9" />
          <Typography>Item9</Typography>
        </a>
      </Link>

      <Link href="/Item10">
        <a className={router.pathname === "/Item10" ? "active" : ""}>
          <img src="/image/menu-icon-10.png" alt="Item10" />
          <Typography>Item10</Typography>
        </a>
      </Link>
    </Menu>
  );
}
