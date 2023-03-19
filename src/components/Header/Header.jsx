// import logo from '../../images/logo.svg';
import map from '../../images/map.svg'

function Header() {
  return (
    <header className="header">
      {/* <img className='header__logo' src={logo} alt="логотип гостиницы Вега" /> */}
      <div className='header__container'>
        <div className='header__logo-container'>
          <h1 className='header__title'>Отель Вега</h1>
          <div className='header__adress-container'>
            <img className='header__map' src={map} alt="*" />
            <p className='header__adress'>г.Наро-Фоминск ул.Московская, д.6</p>
          </div>
        </div>
        <div className='header__links'>
          <a href='#about' className='header__link'>О нас</a>
          <a href='#rooms' className='header__link'>Номерной фонд</a>
          <a href='#registration' className='header__link'>Бронирование</a>
          <a href='#contacts' className='header__link'>Контакты</a>
        </div>
      </div>
    </header>
  )
}

export default Header;