import logo from '../../images/logo-place-banner.svg';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <img className="banner__logo" src={logo} alt="логотип гостиницы Вега" />
        <p className='banner__text'>краткое описание гостиницы</p>
      </div>
    </section>
  )
}

export default Banner;