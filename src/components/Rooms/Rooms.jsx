import Room from "../Room/Room";

function Rooms(props) {
  return (
    <section className="rooms">
      <div className="rooms__container">
        {props.roomsArray.map((room)=> {
          return(<Room room={room} key={room._id}/>)
        })}
      </div>
    </section>
  )
}

export default Rooms;