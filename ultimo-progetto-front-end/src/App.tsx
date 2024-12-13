import './App.css'
import CustomNavbar from './components/CustomNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ApiSections from './components/ApiSections'
import { ArticlesComponent } from './components/ArticlesComponent'
import { CustomFooter } from './components/CustomFooter'
import { Player } from './components/Player'
import { Col, Container, Row } from 'react-bootstrap'
import { SidebarComponent } from './components/SidebarComponent'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="d-none d-lg-block p-0 ">
          <SidebarComponent />
        </Col>
        <Col xs={12} lg={9} className=" px-0">
          <header>
            <CustomNavbar />
          </header>
          <main className="mx-0 bg-dark text-white">
            <FirstSection />
            <SecondSection />
            <ApiSections />
            <ArticlesComponent />
            <Player />
          </main>
          <footer>
            <CustomFooter />
          </footer>
        </Col>
      </Row>
    </Container>
  )
}

export default App
