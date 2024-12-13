import { Button, Col, Container, Row } from 'react-bootstrap'

export const ArticlesComponent = () => {
  const items = [
    'Esplora per genere',
    'Decenni',
    "Attività e stati d'animo",
    'Worldwide',
    'Classifiche',
    'Audio spaziale',
    'Hit del passato',
    'Nuovi artisti',
    'Nuovi album',
  ]

  return (
    <Container fluid className="pb-3">
      <Row className="text-start">
        <Col xs={12}>
          <h3>Articoli per te</h3>
        </Col>
        {items.map((item, index) => (
          <Col key={index} xs={12} className="d-grow-1 g-2">
            <div className="d-flex justify-content-between align-items-baseline bg-body-secondary pe-2 rounded-3 ">
              <Button
                variant="tertiary"
                className="w-100 text-start fw-bold"
                style={{ color: '#F95869' }}
              >
                {item}
              </Button>
              <i
                className="bi bi-arrow-right-short "
                style={{ cursor: 'pointer', color: '#F95869' }}
              ></i>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
