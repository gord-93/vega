import { Route, Routes } from 'react-router-dom';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
