function Room(props) {
  return (
    <div className="room">
      <div className="room__container">
        <img className="room__image" src={props.room.img} alt={props.room.title} />
        <p className="room__price">{props.room.price}&#8381;</p>
      </div>
      <p className="room__title">{props.room.title}</p>
    </div>
  )
}

export default Room;