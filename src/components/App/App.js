import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Registration from '../Registration/Registration';
import Rooms from '../Rooms/Rooms';
import { roomsArray } from '../utils/roomsArray';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Rooms roomsArray={roomsArray}/>
      <Info />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
