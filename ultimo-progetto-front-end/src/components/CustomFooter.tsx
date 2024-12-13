import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Footer.css'

export const CustomFooter = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6} className="mb-3">
            <div className="d-flex flex-wrap">
              <a href="#" className="footer-link me-3 mb-2">
                Italia
              </a>
              <span className="footer-link">|</span>
              <a href="#" className="footer-link mx-3 mb-2">
                English (UK)
              </a>
            </div>
          </Col>
          <Col md={6} className="text-md-end mb-3">
            <p className="m-0 small text-start footer-link">
              Copyright © 2024 Apple Inc. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-wrap small gap-2">
              <a href="#" className="footer-link">
                Condizioni dei servizi internet
              </a>
              <span className="footer-link">|</span>
              <a href="#" className="footer-link">
                Apple Music e privacy
              </a>
              <span className="footer-link">|</span>
              <a href="#" className="footer-link">
                Avviso sui cookie
              </a>
              <span className="footer-link">|</span>
              <a href="#" className="footer-link">
                Supporto
              </a>
              <span className="footer-link">|</span>
              <a href="#" className="footer-link">
                Feedback
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
