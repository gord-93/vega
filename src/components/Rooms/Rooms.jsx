import Room from "../Room/Room";

function Rooms(props) {
  return (
    <section className="rooms">
      <h1 className="rooms__title">
        Номерной фонд
      </h1>
      <div className="rooms__container">
        {props.roomsArray.map((room)=> {
          return(<Room room={room} key={room._id} scrollToElem={props.scrollToElem} />)
        })}
      </div>
    </section>
  )
}

export default Rooms;