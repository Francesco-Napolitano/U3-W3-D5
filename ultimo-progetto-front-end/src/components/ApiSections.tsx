import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import SongInterface from '../types/SongInterface'

const ApiSections = () => {
  const [songs, setSongs] = useState<SongInterface[]>([])

  const getSongs = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=Lucio Battisti '
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setSongs(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getSongs()
  }, [])

  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} className="text-start mb-2">
          <h2>Ascolta un po' di musica italiana!</h2>
        </Col>
        {songs.map((song) => {
          return (
            <Col xs={4} lg={3} className="p-2 py-0" key={song.id}>
              <div>
                <img
                  src={song.album.cover_medium}
                  alt="playlist image"
                  className="w-100"
                />
                <div className="d-flex mt-1 justify-content-between">
                  <p>{song.title.slice(0, 30)}</p>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ApiSections
