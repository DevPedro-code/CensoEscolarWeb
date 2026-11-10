import { Col, Row, Table } from 'react-bootstrap';
import instituicoes from '../datasets/instituicoes.json';

const InstituicaoEnsino = () => {
  // Ordena da maior para a menor quantidade de matrículas e pega as 10 primeiras
  let instituicoesEnsino = [...instituicoes]
    .sort((a, b) => b.qt_mat_bas - a.qt_mat_bas)
    .slice(0, 10);

  return (
    <>
      <Row className="pt-4">
        <Col>
          <h2>Top 10 IEs com mais matrículas na Paraíba</h2>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Município</th>
            <th>Matrículas (total)</th>
            <th>Infantil</th>
            <th>Fundamental</th>
            <th>Médio</th>
          </tr>
        </thead>
        <tbody>
          {instituicoesEnsino.map((instituicaoEnsino, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{instituicaoEnsino.no_entidade}</td>
                <td>{instituicaoEnsino.no_municipio}</td>
                <td>{instituicaoEnsino.qt_mat_bas}</td>
                <td>{instituicaoEnsino.qt_mat_inf}</td>
                <td>{instituicaoEnsino.qt_mat_fund}</td>
                <td>{instituicaoEnsino.qt_mat_med}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;
