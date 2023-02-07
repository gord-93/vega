function Room(props) {
  return (
    <div className="room">
      <img className="room__image" src={props.room.img} alt={props.room.title} />
      <div className="room__container">
        <p className="room__title">{props.room.title}</p>
        <p className="room__price">{props.room.price}&#8381;</p>
      </div>
    </div>
  )
}

export default Room;