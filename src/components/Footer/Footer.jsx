import logo from '../../images/logo-white.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className='footer__logo' src={logo} alt="logo" />
        <p className='footer__text'>Все материалы представленные на сайте не являются публичной офертой и носят справочный характер - Гостиница ВЕГА ОТЕЛЬ в городе Наро-Фоминске &#169; 2023</p>
      </div>
    </footer>
  )
}

export default Footer;