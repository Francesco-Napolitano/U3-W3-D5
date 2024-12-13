import { Container, Navbar } from 'react-bootstrap'

export const Player = () => {
  return (
    <Navbar className="bg-body-tertiary mx-3  rounded-4" fixed="bottom">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-start">
          <img
            style={{ width: '40px', height: '40px' }}
            src="https://www.ibs.it/images/0743214506523_0_0_190_75.jpg"
            alt="bennato's album cover"
          />
          <span style={{ fontSize: '0.5em' }} className="text-success ms-2 ">
            È stata tua la colpa - Edoardo Bennato
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex gap-2">
            <i className="bi bi-play-circle"></i>
            <i className="bi bi-skip-end-circle"></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
