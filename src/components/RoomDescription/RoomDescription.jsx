import photo from '../../images/Photos/3-room/1.jpeg';

function RoomDescription() {
  return (
    <section className="room-description">
      <div className="room-description__info">
        <h1 className="room-description__title">
          Название номера
        </h1>
        <p className="room-description__law">
          При заезде в отель, будьте готовы предъявить документ удостоверение личности государственного образца.
        </p>
        <p className="room-description__price">
          Стоимость - 4000 ₽ в сутки
        </p>
        <p className="room-description__things-label">В номере</p>
        <ul className="room-description__things">
          <li className="room-description__thing">двуспальная кровать</li>
          <li className="room-description__thing">прикроватная тумбочка</li>
          <li className="room-description__thing">телевизор</li>
          <li className="room-description__thing">холодильник</li>
          <li className="room-description__thing">кондиционер</li>
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