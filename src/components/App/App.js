import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Rooms from '../Rooms/Rooms';
import Gallery from '../Gallery/Gallery';
import RoomDescription from '../RoomDescription/RoomDescription';
import { roomsArray } from '../utils/roomsArray';
import './App.css';



function App() {

  return (
    <div className="app">
      <Banner />
      <RoomDescription />
      {/*<Rooms roomsArray={roomsArray} />
      <Gallery photosArray={roomsArray}/> 
      <Info />
      <Contacts />*/}
      <Footer />
    </div>
  );
}

export default App;
