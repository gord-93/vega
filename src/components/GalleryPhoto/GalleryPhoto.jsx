function galleryPhoto(props) {
  return (
    <div className="gallery-photo" onClick={() => {
      return props.handlerChangePopupInfo(props.photo.img, props.photo.title)
    }}>
      <img className="gallery-photo__image" src={props.photo.img} alt={props.photo.title} />
    </div>
  )
}

export default galleryPhoto