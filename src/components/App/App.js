import { Route, Routes } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Rooms from '../Rooms/Rooms';
import Gallery from '../Gallery/Gallery';
import RoomDescription from '../RoomDescription/RoomDescription';
import { roomsArray } from '../utils/roomsArray';
import './App.css';
import Review from '../Review/Review';



function App() {

  return (
    <div className="app">
      <Banner />
      <Routes>
        <Route path="/photo" element={<Gallery photosArray={roomsArray}/> }/>
        <Route path='/' element={
          <>
            <Rooms roomsArray={roomsArray}/>
            <Info />
            <Contacts />
          </>
        }>
        </Route>
        <Route path="/description" element={<RoomDescription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
