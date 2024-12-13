import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/images/1a.png'
import image2 from '../assets/images/1b.png'
import image3 from '../assets/images/1c.png'
import '../styles/FirstSection.css'

const FirstSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="text-start mt-3">
          <h1 className="border-bottom border-secondary border-1 pb-3">
            Novità
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Carousel className="text-start" interval={null} indicators={false}>
            <Carousel.Item>
              <div className="d-flex gap-3">
                <div className="d-flex flex-column">
                  <p className="reviewer_name mb-0 text-secondary fw-bold text-uppercase">
                    Nuova stazione radio
                  </p>
                  <p className="flex-grow-1">
                    Rilassati al resto ci pensiamo noi.
                  </p>
                  <div className="image_box">
                    <img
                      className="w-100 object-fit-cover h-100"
                      alt="playlist image"
                      width="140"
                      height="140"
                      src={image1}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <p className="reviewer_name mb-0 text-secondary fw-bold text-uppercase">
                    Nuova stazione radio
                  </p>
                  <p className="flex-grow-1">
                    Ecco la nuova casa della musica latina.
                  </p>
                  <div className="image_box">
                    <img
                      className="w-100 object-fit-cover h-100"
                      alt="playlist image"
                      width="140"
                      height="140"
                      src={image2}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex gap-3">
                <div className="d-flex flex-column">
                  <p className="reviewer_name mb-0 text-secondary fw-bold text-uppercase">
                    Nuova stazione radio
                  </p>
                  <p className="flex-grow-1">
                    Ecco la tua playlist ideale. Ascolta brani inediti.
                  </p>
                  <div className="image_box">
                    <img
                      className="w-100 object-fit-cover h-100"
                      alt="playlist image"
                      width="140"
                      height="140"
                      src={image3}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <p className="reviewer_name mb-0 text-secondary fw-bold text-uppercase">
                    Esplora la musica latina
                  </p>
                  <p className="flex-grow-1">
                    Le playist più ascoltate dell'ultimo mese
                  </p>
                  <div className="image_box">
                    <img
                      className="w-100 object-fit-cover h-100"
                      alt="playlist image"
                      width="140"
                      height="140"
                      src={image1}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default FirstSection
