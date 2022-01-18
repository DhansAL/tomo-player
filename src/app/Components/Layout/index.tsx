import { Link } from "solid-app-router";
import { Nav } from "solid-bootstrap";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ background: "#2a3545" }}>

        <Nav >
          <Nav.Item>
            <Nav.Link>
              <h5 >
                <Link href="/" class="text-light" >OVERVIEW</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <h5  >
                <Link href="/library" class="text-light">LIBRARY</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <h5>
                <Link href="/settings" style={{ textDecoration: 'none', color: "white" }}>SETTINGS</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <h5   >
                <Link href="/player" class="text-light">PLAYER</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

    </>
  );
};
