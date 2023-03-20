import { NavLink } from 'react-router-dom';

function Room(props) {
  return (
    <div className="room">
      <NavLink to='/description' className='room__link'>
        <div className="room__container">
          <img className="room__image" src={props.room.img} alt={props.room.title} />
          <p className="room__price">{props.room.price}&#8381;</p>
        </div>
        <h2 className="room__title">{props.room.title}</h2>
      </NavLink>
    </div>
  )
}

export default Room;