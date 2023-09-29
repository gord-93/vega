function Gallery(props) {
  return (
    <section className="gallery">
      <h1 className='gallery__title'>
        Фотогалерея
      </h1>
      <div className="gallery__container">
        {props.photosArray.map((photo) => {
          return (
            <div className="gallery__photo" key={photo._id} onClick={() => props.openPopup(photo)}>
              <img className="gallery__photo-image" src={photo} alt={photo._id} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery;