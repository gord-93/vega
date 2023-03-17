// import logo from '../../images/logo-place-banner.svg';
import Header from '../Header/Header';
import PhoneLine from '../PhoneLine/PhoneLine';
import Registration from '../Registration/Registration';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <PhoneLine />
        <Header />
        {/* <img className="banner__logo" src={logo} alt="логотип гостиницы Вега" /> */}
        {/* <h1 className='banner__text'>Добро пожаловать в гостиницу "ВЕГА ОТЕЛЬ" города Наро-Фоминск, Московская область</h1> */}
        {/* <button className='banner__button'>Смотреть номера</button> */}
        <Registration />
      </div>
    </section>
  )
}

export default Banner;