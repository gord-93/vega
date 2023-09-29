import sofa from '../../images/icons/sofa.svg';
import parking from '../../images/icons/parking.svg';
import delivery from '../../images/icons/delivery.svg';
import everytime from '../../images/icons/everytime.svg';
import kitchen from '../../images/icons/kitchen.svg';
import laundry from '../../images/icons/laundry.svg';
import reserved from '../../images/icons/reserved.svg';
import shower from '../../images/icons/shower.svg';
import station from '../../images/icons/station.svg';


function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <h2 className="info__title">Наши услуги:</h2>
        <div className="info__ul">
          <div className="info__card">
            <img className='info__icon' src={parking} alt="test" />
            <p className="info__text">Бесплатная парковка на территории отеля</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={kitchen} alt="test" />
            <p className="info__text">Открыта комфортная комната, оборудованная для приема и приготовления пищи</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={shower} alt="test" />
            <p className="info__text">Современные санузлы оборудованы душевыми кабинами и ваннами</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={everytime} alt="test" />
            <p className="info__text">Круглосуточная служба приема и размещения</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={station} alt="test" />
            <p className="info__text">В непосредственной близости располагается ж/д и авто вокзал, торговый центр, кафе</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={sofa} alt="test" />
            <p className="info__text">Во всех просторных номерах установлена уютная мебель, 
            телевизор, спутниковые каналы, холодильник, бесплатный интернет Wi-Fi (ресепшн), кондиционер.</p>
          </div>
        </div>
        <h3 className="info__subtitle">Дополнительные услуги:</h3>
        <div className="info__ul">
          <div className="info__card">
            <img className='info__icon' src={delivery} alt="test" />
            <p className="info__text">Заказ обедов и ужинов в номер</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={reserved} alt="test" />
            <p className="info__text">Бронирование столиков в любом кафе города</p>
          </div>
          <div className="info__card">
            <img className='info__icon' src={laundry} alt="test" />
            <p className="info__text">Услуги прачечной</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info;