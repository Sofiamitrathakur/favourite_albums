import Album from './Album'

const MainContent = (props) => {
  return (
    <div className="main">
      <h1>Favourite Albums</h1>
      <ul>
        {props.results.map((album) => (
          <Album
            key={album.id}
            name={album.name}
            // artist={album.artist.name}
            // label={album.label}
            // chartposition={album.highestChartPosition}
            // favouritesong={album.favouriteSong}
            // id={album.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
