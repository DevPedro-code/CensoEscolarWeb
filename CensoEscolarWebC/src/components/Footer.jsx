import { Container, Row, Col, Nav } from 'react-bootstrap';

import { IoHomeOutline, IoSchoolOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer
      className="bg-opacity-70 text-light py-4 mt-5"
      style={{ backgroundColor: '#33025e' }}
    >
      <Container>
        <Row>
          {/* Coluna esquerda */}
          <Col xs={12} md={6}>
            Censo Escolar 2025
          </Col>

          {/* Coluna direita */}
          <Col xs={12} md={6}>
            <h5 className="mb-3">Links</h5>

            <Nav className="flex-column">
              <Nav.Link
                href="/"
                className="text-light d-flex align-items-center gap-2 mb-2"
              >
                <IoHomeOutline size={32} />
                Home
              </Nav.Link>

              <Nav.Link
                href="/instituicoesensino"
                className="text-light d-flex align-items-center gap-2"
              >
                <IoSchoolOutline size={32} />
                Instituições Ensino
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* Rodapé inferior */}
        <Row>
          <Col className="text-center">
            {new Date().getFullYear()} Censo Escolar PB
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
