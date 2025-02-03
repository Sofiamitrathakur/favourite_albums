const Album = (props) => {
  return (
    <li className="album" id={props.id}>
      <div className="album-info">
        <h3>{props.albumName}</h3>
        <img src="props.albumCover" alt={'profile pic of ' + props.albumName} />
        <h5>Artist: {props.artist.name}</h5>
        <img
          src="props.artist.image"
          alt="{'profile pic of ' + props.artist.image}"
        />
        <h5>Label: {props.label}</h5>
        <h5>Highest chart position: {props.highestChartPosition}</h5>
        <h5>Awards: {props.awards}</h5>
        <h5>My favourite track: {props.favouriteSong} </h5>
      </div>
    </li>
  )
}

export default Album
