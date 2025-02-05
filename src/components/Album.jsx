const Album = (props) => {
  return (
    <li className="album" id={props.id}>
      <div className="album-info">
        <h3>{props.albumName}</h3>
        <a href={props.wiki}>
          <img src={props.albumCover} alt={`Cover of ${props.albumName}`} />
        </a>
        <h5>Artist: {props.artist.name}</h5>
        {/* <img
          src={props.artist?.image}
          alt={`Profile pic of ${props.artist.name}`}
        /> */}
        <h5>Genre: {props.genre}</h5>
        <h5>Released: {props.releaseYear}</h5>
        {/* <h5>Label: {props.label}</h5> */}
        {/* <h5>Highest chart position: {props.highestChartPosition}</h5> */}
        <h5>
          My favourite track: <a href={props.songLink}>{props.favouriteSong}</a>
        </h5>
      </div>
    </li>
  )
}

export default Album
