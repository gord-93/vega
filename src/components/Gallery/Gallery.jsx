import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';

function Gallery(props) {
  return (
    <section className="gallery">
      <h1 className='gallery__title'>
        Фотогалерея
      </h1>
      <div className="gallery__container">
        {props.photosArray.map((photo) => {
          return (<GalleryPhoto photo={photo} key={photo._id} />)
        })}
      </div>
    </section>
  )
}

export default Gallery;