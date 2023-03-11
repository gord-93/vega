import calendareIcon from '../../images/calendare.svg';

function PhoneLine() {
  return (
    <div className="phoneline">
      <div className="phoneline__phone-container">
        <a className="phoneline__phone-link" href="tel: +74963446595">8(496)344-65-95</a>
        <a className="phoneline__phone-link" href="tel: +79154284888">8(915)428-48-88</a>
      </div>
      <button className="phoneline__button">Забронировать <img className="phoneline__button-icon" src={calendareIcon} alt="Иконка календаря" /></button>
    </div>
  )
}

export default PhoneLine;