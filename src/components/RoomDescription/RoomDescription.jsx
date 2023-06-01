import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { roomsArray } from '../utils/roomsArray';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function RoomDescription(props) {
  const params = useParams();
  const [room, setRoom] = useState({
    title: '',
    price: '',
    about: [],
    photos: []
  });

  useEffect(() => setRoom(roomsArray.find((room) => room.urlTitle === params.urlTitle)), [params.urlTitle]);

  return (room ?
    <>
      <Banner headerRef={props.headerRef} scrollToElem={props.scrollToElem} />
      <section className="room-description" >
        <div className="room-description__info">
          <h1 className="room-description__title">
            {room.title}
          </h1>
          <p className="room-description__law">
            При заезде в отель, будьте готовы предъявить документ удостоверение личности государственного образца.
          </p>
          <p className="room-description__price">
            {room.price} &#8381;/сутки
          </p>
          <p className="room-description__things-label">В номере</p>
          <ul className="room-description__things">
            {room.about.map((thing) => <li className="room-description__thing">{thing}</li>)}
          </ul>
        </div>
        <ul className="room-description__photos">
          {room.photos.map((photo) => <li className="room-description__photo-elem"><img className="room-description__photo" src={photo} alt="number" /></li>)}
        </ul>
      </section>
      <Footer />
    </> : <NotFound />
  )
}

export default RoomDescription