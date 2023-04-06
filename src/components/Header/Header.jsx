// import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import map from '../../images/map.svg'

function Header() {

  return (
    <header className="header">
      <div className='header__container'>
        <div className='header__logo-container'>
          <NavLink to="/" className="header__title-link"><h1 className='header__title'>Отель Вега</h1></NavLink>
          <div className='header__adress-container'>
            <img className='header__map' src={map} alt="*" />
            <p className='header__adress'>г.Наро-Фоминск ул.Московская, д.6</p>
          </div>
        </div>
        <div className='header__links'>
          <NavLink to="/" className='header__link'>Главная</NavLink>
          <NavLink to="/photo" className='header__link'>Фотогалерея</NavLink>
          <NavLink to='/fund' className='header__link'>Номерной фонд</NavLink>
          <a href='#registration' className='header__link'>Бронирование</a>
          <NavLink to='/contacts' className='header__link'>Контакты</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header;