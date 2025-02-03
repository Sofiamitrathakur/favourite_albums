import './App.css'
import albums from 'albums.json'
import Album from './components/Album.jsx'

const App = () => {
  console.log(albums)
  return (
    <div className="App">
      <h1>Favourite Albums</h1>
      {albums.results.map((album) => (
        <Album
          cover={album.albumCover}
          artist={album.artist.name}
          releaseYear={album.releaseYear}
          label={album.label}
          favouriteSong={album.favouriteSong}
        />
      ))}
    </div>
  )
}

export default App
