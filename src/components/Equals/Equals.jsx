import photo from '../../images/Photos/lux-1-room/2.jpg'

function Equals() {
  return (
    <section className="equals">
      <h1 className='equals__title'>
        Чем отель ВЕГА выделяется среди других отелей в Наро-Фоминске?
      </h1>
      <div className='equals__container'>
        <div className="equals__info">
          <h2 className="equals__subtitle">
            Удобно для командировок и деловых визитов
          </h2>
          <ul className="equals__list">
            <li className="equals__elem"><p className='equals__elem-text'>Близость к железнодорожному и автовокзалу</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Продуктовые магазины в шаговой доступности</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Обширный номерной фонд</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Широкий спектр дополнительных услуг</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Оплата за наличный и безналичный расчет</p></li>
          </ul>
        </div>
        <img className="equals__photo" src={photo} alt="number" />
      </div>
      <div className='equals__container'>
        <img className="equals__photo" src={photo} alt="number" />
        <div className="equals__info">
          <h2 className="equals__subtitle">
            Комфортно для отдыха и проживания
          </h2>
          <ul className="equals__list">
            <li className="equals__elem"><p className='equals__elem-text'>Более 5 лет на рынке услуг</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Удобное расположение</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Чуткий и внимательный персонал</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Дополнительный сервис</p></li>
            <li className="equals__elem"><p className='equals__elem-text'>Безопасность гостей</p></li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Equals;