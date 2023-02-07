import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className='header__logo' src={logo} alt="логотип гостиницы Вега" />
      <div className='header__links'>
        <a href='#about' className='header__link'>О нас</a>
        <a href='#rooms' className='header__link'>номерной фонд</a>
        <a href='#registration' className='header__link'>бронирование</a>
        <a href='#contacts' className='header__link'>контакты</a>
      </div>
    </header>
  )
}

export default Header;