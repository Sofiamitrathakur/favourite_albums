import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import albums from './data/albums.json'

const App = () => {
  console.log(albums)
  return (
    <div className="flex-row">
      <SideBar />
      <MainContent albums={albums} />

      {/* <h1>Favourite Albums</h1>
      {albums.results.map((album) => (
        <Album
          cover={album.albumCover}
          artist={album.artist.name}
          releaseYear={album.releaseYear}
          label={album.label}
          favouriteSong={album.favouriteSong}
        />
      ))} */}
    </div>
  )
}

export default App
