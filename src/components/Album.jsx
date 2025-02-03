const Album = (props) => {
  console.log(props)
  return (
    <div className="album-details">
      <img src={props.albumCover} alt={'profile pic of ' + props.albumName} />
      <h2>
        {props.albumName} by {props.artist.name}
      </h2>
      {/* <h3>Home: {props.phone}</h3>
      <h3>Mobile: {props.cell}</h3> */}
    </div>
  )
}

export default Album
