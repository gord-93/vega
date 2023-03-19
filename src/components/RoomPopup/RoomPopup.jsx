function RoomPopup(props) {
  return (
    <section className={`room-popup ${props.popupIsOpen && `room-popup_visible`}`} onClick={props.handlerOpenPopup}>
      <div className="room-popup__container">
        <img className='room-popup__image' src={props.roomsArray[0].img} alt={props.roomsArray[0].title} />
        <div className="room-popup__info">
          <h1 className="room-popup__title">{props.roomsArray[0].title}</h1>
          <p className="room-popup__description">{props.roomsArray[0].title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam omnis quas harum saepe deleniti eveniet quibusdam maiores, eaque nobis voluptas et, neque iste ullam nam esse deserunt pariatur reprehenderit.</p>
        </div>
      </div>
    </section>
  )
};

export default RoomPopup;