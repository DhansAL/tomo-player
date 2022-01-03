import { Link } from "solid-app-router";
import { Nav } from "solid-bootstrap";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link href="/">Overview</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link href="/library">library</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link href="/settings">settings</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
