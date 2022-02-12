import { Link } from "solid-app-router";
import { Nav, Navbar } from "solid-bootstrap";
import { ProPopCanvas } from "../ProPopCanvas";

//FIXME: side css leaks
export const Layout = () => {
  return (
    <>

      <div style={{ background: "#2a3545" }} class="d-flex flex-row justify-content-between align-items-center p-3">
        <div class="d-flex flex-row justify-content-start">
          <div class="d-flex flex-row justify-content-between">
            <Navbar.Brand style={{ color: "white" }} href="#">🍜 Tomoplayer</Navbar.Brand>
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
        </div>
        <div class="d-flex flex-row justify-content-end">
          <ProPopCanvas />
        </div>
      </div>

    </>
  );
};
