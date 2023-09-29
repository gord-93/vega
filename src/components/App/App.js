import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState, useRef } from 'react';
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
import { roomsArray, galleryPhotos } from '../utils/roomsArray';
import './App.css';


function App() {
  const headerRef = useRef(null);
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

  const scrollToElem = () => {
    window.scrollTo({
      top: headerRef.current.clientHeight + 1,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={
          <>
            <Banner headerRef={headerRef} scrollToElem={scrollToElem} />
            <Rooms roomsArray={roomsArray} scrollToElem={scrollToElem} />
            <Equals />
            <Info />
            <Contacts />
            <Footer />
          </>
        } />
        <Route exact path="/photo" element={<>
          <Banner headerRef={headerRef} scrollToElem={scrollToElem} />
          <Gallery 
            photosArray={galleryPhotos}
            openPopup={openPopup}
          />
          <PhotoPopup 
            photosArray={galleryPhotos}
            popupInfo={popupInfo}
            popupIsOpen={popupIsOpen}
            handlerChangePopupInfo={handlerChangePopupInfo}
            closePopup={closePopup}
          /> 
          <Footer />
        </>}/>
        <Route exact path="/rooms/:urlTitle" element={<>
          <RoomDescription headerRef={headerRef} scrollToElem={scrollToElem}/>
          <Footer />
        </>} />
        <Route exact path="/rooms" element={<>
          <Banner headerRef={headerRef} scrollToElem={scrollToElem} />
          <Rooms roomsArray={roomsArray} scrollToElem={scrollToElem} />
          <Footer />
          </>}/>
        <Route exact path="/contacts" element={<>
          <Banner headerRef={headerRef} scrollToElem={scrollToElem} />
          <Contacts />
          <Footer />
          </>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
