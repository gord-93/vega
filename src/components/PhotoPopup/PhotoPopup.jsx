function PhotoPopup(props) {
  const photoIndex = props.photosArray.indexOf(props.popupInfo);

  return (
    <section 
      className={`photo-popup ${props.popupIsOpen && `photo-popup_visible`}`} 
      onClick={(evt)=> evt.target.classList.contains("photo-popup") && props.closePopup()}>
      <button 
        className="photo-popup__close-button"
        onClick={() => props.closePopup()} />
      <button
        className={`photo-popup__preview-button ${photoIndex === 0 && `photo-popup__hidden-button`}`}
        onClick={() => props.handlerChangePopupInfo(props.photosArray[photoIndex - 1])} />
      <img className='photo-popup__image' src={props.popupInfo} alt={props.popupInfo._id} />
      <button 
        className={`photo-popup__next-button ${photoIndex === props.photosArray.length - 1 && `photo-popup__hidden-button`}`}
        onClick={() => props.handlerChangePopupInfo(props.photosArray[photoIndex + 1])} />
    </section>
  )
}

export default PhotoPopup;