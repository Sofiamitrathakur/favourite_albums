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
            wiki={album.wiki}
            albumCover={album.albumCover}
            artist={album.artist}
            releaseYear={album.releaseYear}
            genre={album.genre}
            // label={album.label}
            // highestChartPosition={album.highestChartPosition}
            favouriteSong={album.favouriteSong}
            songLink={album.songLink}
            id={album.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
