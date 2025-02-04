import Album from './Album.jsx'

const MainContent = (props) => {
  return (
    <div className="main">
      <h1>Favourite Albums</h1>
      <ul>
        {props.albums.map((album) => (
          <Album
            key={album.id}
            albumName={album.albumName}
            albumCover={album.albumCover}
            artist={album.artist}
            genre={album.genre}
            label={album.label}
            highestChartPosition={album.highestChartPosition}
            awards={album.awards}
            favouriteSong={album.favouriteSong}
            id={album.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
