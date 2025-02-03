import Album from './Album'

const MainContent = (props) => {
  return (
    <div className="main">
      <h1>Favourite Albums</h1>
      <ul>
        {/* {props.albums.map((album) => (
          <li className="album" key={album.id}>
            <h3>Album: {album.name}</h3>
            <h5>Artist: {album.artist.name}</h5>
          </li>
        ))} */}
        {props.albums.map((album) => (
          <Album
            key={album.id}
            name={album.name}
            artist={album.artist.name}
            label={album.label}
            chartposition={album.highestChartPosition}
            awards={album.awards}
            favouritesong={album.favouriteSong}
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
