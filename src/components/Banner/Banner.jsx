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
        <div className='banner__text-container'>
          <h2 className='banner__title'>Уютный отель в Наро-Фоминске</h2>
          <ul className='banner__ul'>
            <li className='banner__li'>Внимательный и доброжелательный персонал</li>
            <li className='banner__li'>Удобное расположение вблизи Ж/Д вокзала</li>
            <li className='banner__li'>Номера от 2600&#x20bd; до 5000&#x20bd;</li>
            <li className='banner__li'>Бесплатный Wi-Fi</li>
          </ul>
        </div>
        <Registration />
      </div>
    </section>
  )
}

export default Banner;