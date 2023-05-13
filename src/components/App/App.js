import React from 'react';
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
import NotFound from '../NotFound/NotFound';
import { roomsArray } from '../utils/roomsArray';
import './App.css';


function App() {
  const [popupIsOpen, changePopupIsOpen] = useState(false);
  const [popupInfo, changePopupInfo] = useState({  
    img: '#',
    title: 'photo should be here'
  });

  const handlerChangePopupInfo = (photo) => changePopupInfo(photo);

  const openPopup = (photo) => {
    changePopupIsOpen(true);
    changePopupInfo(photo);
    return;
  };

  const closePopup = () => {
    changePopupIsOpen(false);
    changePopupInfo({
      img: '#',
      title: 'photo should be here'
    })
  };

  return (
    <div className='app'>
      <Banner />
      <Routes>
        <Route exact path='/' element={
          <>
            <Rooms roomsArray={roomsArray} />
            <Equals />
            <Info />
            <Contacts />
          </>
        } />
        <Route exact path="/photo" element={<>
          <Gallery 
            photosArray={roomsArray}
            openPopup={openPopup}
          />
          <PhotoPopup 
            photosArray={roomsArray}
            popupInfo={popupInfo}
            popupIsOpen={popupIsOpen}
            handlerChangePopupInfo={handlerChangePopupInfo}
            closePopup={closePopup}
          /> 
        </>}/>
        <Route exact path="/rooms/:id" element={<RoomDescription />} />
        <Route exact path="/rooms" element={<Rooms roomsArray={roomsArray} />}/>
        <Route exact path="/contacts" element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
