import { useNavigate } from "react-router-dom";

function Room(props) {
  const navigate = useNavigate();
  
  return (
    <div className="room" onClick={() => {
      navigate('/rooms/' + props.room.urlTitle);
      props.scrollToElem();
      return;
    }}>
      <div className='room__link'>
        <div className="room__container">
          <img className="room__image" src={props.room.img} alt={props.room.title} />
          <p className="room__price">{props.room.price} руб./сутки</p>
        </div>
        <h2 className="room__title">{props.room.title}</h2>
      </div>
    </div>
  )
}

export default Room;