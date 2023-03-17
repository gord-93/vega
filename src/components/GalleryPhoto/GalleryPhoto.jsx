function galleryPhoto(props) {
  return (
    <div className="galleryPhoto">
      <img className="galleryPhoto__image" src={props.photo.img} alt={props.photo.title} />
    </div>
  )
}

export default galleryPhoto