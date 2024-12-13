import { Col, Container, Row } from 'react-bootstrap'
import image1 from '../assets/images/2a.png'
import image2 from '../assets/images/2b.png'
import image3 from '../assets/images/2c.png'
import image4 from '../assets/images/2d.png'
import image5 from '../assets/images/2e.png'

const SecondSection = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} className="d-flex align-items-center gap-3">
          <h2>Nuovi episodi radio</h2>
          <i className="bi bi-arrow-right"></i>
        </Col>
        <Col>
          <div>
            <img src={image1} alt="playlist image" className="w-100" />
            <div className="d-flex mt-1 justify-content-between">
              <p>Pròlogo con abuelo</p>
              <i className="bi bi-explicit"></i>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img src={image2} alt="playlist image" className="w-100" />
            <div className="d-flex mt-1">
              <p>The wanderer</p>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img src={image3} alt="playlist image" className="w-100" />
            <div className="d-flex mt-1">
              <p>Michael Bublè & Carly Pearce</p>
            </div>
          </div>
        </Col>
        <Col className="d-none d-lg-block">
          <div>
            <img src={image4} alt="playlist image" className="w-100" />
            <div className="d-flex mt-1">
              <p>Stephan Moccio Show</p>
            </div>
          </div>
        </Col>
        <Col className="d-none d-lg-block">
          <div>
            <img src={image5} alt="playlist image" className="w-100" />
            <div className="d-flex mt-1">
              <p>Listen to: Julia Michaels</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SecondSection
