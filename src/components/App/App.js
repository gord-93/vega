import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Rooms from '../Rooms/Rooms';
import Gallery from '../Gallery/Gallery';
import RoomDescription from '../RoomDescription/RoomDescription';
import Equals from '../Equals/Equals';
import PhotoPopup from '../PhotoPopup/PhotoPopup';
import { roomsArray } from '../utils/roomsArray';
import './App.css';



function App() {

  const [popupInfo, changePopupInfo] = useState({
    isOpen: false,
    imgSrc: '#',
    imgTitle: ''
  })

  const handlerChangePopupInfo = (imgSrc, imgTitle) => {
    return popupInfo.isOpen ? 
    changePopupInfo({
      isOpen: false,
      imgSrc: '#',
      imgTitle: ''
    }) :
    changePopupInfo({
      isOpen: true,
      imgSrc: imgSrc,
      imgTitle: imgTitle
    })
  }

  return (
    <div className='app'>
      <Banner />
      <Routes>
        <Route path="/photo" element={<>
          <Gallery photosArray={roomsArray} handlerChangePopupInfo={handlerChangePopupInfo} />
          <PhotoPopup popupInfo={popupInfo} handlerChangePopupInfo={handlerChangePopupInfo} /> 
        </>}/>
        <Route path="/fund" element={<Rooms roomsArray={roomsArray}/>}/>
        <Route path="/description" element={<RoomDescription />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/' element={
          <>
            <Rooms roomsArray={roomsArray}/>
            <Equals />
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
