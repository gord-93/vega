import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import Info from '../Info/Info';
// import Registration from '../Registration/Registration';
import Rooms from '../Rooms/Rooms';
import Gallery from '../Gallery/Gallery'
import { roomsArray } from '../utils/roomsArray';
import './App.css';


function App() {
  return (
    <div className="app">
      <Banner />
      <Rooms roomsArray={roomsArray}/>
      <Gallery photosArray={roomsArray}/> 
      <Info />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
