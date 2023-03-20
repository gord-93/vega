function PhotoPopup(props) {
  return (
    <section className={`photo-popup ${props.popupInfo.isOpen && `photo-popup_visible`}`} onClick={()=> props.handlerChangePopupInfo()} >
      <img className='photo-popup__image' src={props.popupInfo.imgSrc} alt={props.popupInfo.imgTitle} />
    </section>
  )
}

export default PhotoPopup;