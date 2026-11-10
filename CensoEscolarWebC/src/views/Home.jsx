import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Carrossel from '../components/Carrossel';
import instituicoes from '../datasets/instituicoes.json';

const Home = () => {
  let itensCarrossel = [
    {
      srcImagem:
          'https://cdn.jornaldaparaiba.com.br/wp-content/uploads/2022/01/Escola-Tecnica-Integral-de-Bayeux.jpeg?xid=630413',
      titulo: 'Censo Escolar 2025',
      descricao: 'Conheça os dados das escolas do estado da Paraíba.',
    },
    {
      srcImagem:
        'https://assent-2k25.wscom.com.br/wp-content/uploads/2025/12/2712fd1f-e8c8-406f-887d-8fcaff55c1cb.jpeg',
      titulo: 'Conheça as Escolas com mais matrículas do estado da Paraíba',
      descricao: 'Veja quais instituições possuem mais matrículas.',
    },
  ];

  // Calcula o total de matrículas somando o qt_mat_bas de todas as IEs
  let totalMatriculas = instituicoes.reduce((total, instituicao) => {
    return total + instituicao.qt_mat_bas;
  }, 0);

  return (
    <>
      {/* isso é o Carrossel */}
      <Carrossel itensCarrossel={itensCarrossel}></Carrossel>
      {/* Cards dinâmicos */}
      <Container className="mt-2">
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.politicaetc.com.br/wp-content/uploads/2024/01/imagem_2024-01-23_103616493-750x375.png"
              />
              <Card.Body>
                <Card.Title>Instituições de Ensino</Card.Title>
                <Card.Text>
                  A Paraíba possui {instituicoes.length} instituições de ensino
                  com matrículas registradas no Censo Escolar 2025.
                </Card.Text>
                <LinkContainer to="/instituicoesensino">
                  <Button variant="primary">Ver instituições</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwxtWmYg-yAg2e-2I8LObrAEQg748g_mhIjQpMKRgQM4Fwjh3DnkEpB8&s=10"
              />
              <Card.Body>
                <Card.Title>Matrículas na Educação Básica</Card.Title>
                <Card.Text>
                  As instituições somam {totalMatriculas} matrículas na
                  educação básica.
                </Card.Text>
                <LinkContainer to="/instituicoesensino">
                  <Button variant="primary">Ver ranking</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Gh35Zko6145-OLorUQFmYpyndprwKB4TiRr3mTuxDyJ03V-gf--rnWVp&s=10"
              />
              <Card.Body>
                <Card.Title>Sobre os dados</Card.Title>
                <Card.Text>
                  Os dados são do Censo Escolar da educação básica de 2025.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
