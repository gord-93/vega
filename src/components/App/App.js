import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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
  let navigate = useNavigate();
  const location = useLocation();
  const bannerRef = useRef(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [selectedRoomFull, setSelectedRoomFull] = React.useState({});
  const [popupIsOpen, changePopupIsOpen] = useState(false);
  const [popupInfo, changePopupInfo] = useState({  
    img: '#',
    title: 'photo should be here'
  });

  useEffect(() => setBannerHeight(bannerRef.current.clientHeight), [])
  useEffect(() => window.scrollTo({
    top: bannerHeight,
    left: 0,
    behavior: 'smooth'
  }), [location, bannerHeight]);

  const handleOpenRoomDescription = (room) => {
    navigate('/description/' + room._id);
    setSelectedRoomFull(room);
    
  }

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
      <Banner bannerRef={bannerRef} />
      <Routes>
        <Route path="/photo" element={<>
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
        <Route path="/fund" element={<Rooms roomsArray={roomsArray} onRoomClick={handleOpenRoomDescription}/>}/>
        <Route path="/description/:_id" element={<RoomDescription room={selectedRoomFull} />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/' element={
          <>
            <Rooms roomsArray={roomsArray} onRoomClick={handleOpenRoomDescription}/>
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
