// import logo from '../../images/logo-place-banner.svg';
import Header from '../Header/Header';
import PhoneLine from '../PhoneLine/PhoneLine';

function Banner(props) {
  return (
    <section className="banner" ref={props.headerRef} >
      <div className="banner__container">
        <PhoneLine />
        <Header scrollToElem={props.scrollToElem} />
        <div className='banner__text-container'>
          <h2 className='banner__title'>Уютный отель в Наро-Фоминске</h2>
          <ul className='banner__ul'>
            <li className='banner__li'>Внимательный и доброжелательный персонал</li>
            <li className='banner__li'>Удобное расположение вблизи Ж/Д вокзала</li>
            <li className='banner__li'>Номера от 2700&#x20bd; до 6000&#x20bd;</li>
            <li className='banner__li'>Бесплатный Wi-Fi</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Banner;