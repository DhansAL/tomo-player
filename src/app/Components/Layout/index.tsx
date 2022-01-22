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
                <Link href="/" class="text-decoration-none text-light" >OVERVIEW</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <h5  >
                <Link href="/library" class="text-decoration-none text-light">LIBRARY</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <h5>
                <Link href="/settings" class="text-decoration-none text-light">SETTINGS</Link>
              </h5 >
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

    </>
  );
};
