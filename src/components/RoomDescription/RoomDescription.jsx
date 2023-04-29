import photo from '../../images/Photos/3-room/1.jpeg';

function RoomDescription(props) {
  return (
    <section className="room-description">
      <div className="room-description__info">
        <h1 className="room-description__title">
          {props.room.title}
        </h1>
        <p className="room-description__law">
          При заезде в отель, будьте готовы предъявить документ удостоверение личности государственного образца.
        </p>
        <p className="room-description__price">
          {props.room.price}
        </p>
        <p className="room-description__things-label">В номере</p>
        <ul className="room-description__things">{props.room.about.map((a) => {
          return(
            <li className="room-description__thing">{a}</li>
          )
        })}
        </ul>
      </div>
      <ul className="room-description__photos">
        <li className="room-description__photo-elem"><img className="room-description__photo" src={photo} alt="number" /></li>
        <li className="room-description__photo-elem"><img className="room-description__photo" src={photo} alt="number" /></li>
        <li className="room-description__photo-elem"><img className="room-description__photo" src={photo} alt="number" /></li>
      </ul>
    </section>
  )
}

export default RoomDescription