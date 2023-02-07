function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <div className="contacts__contact-container">
          <div className="contacts__item">
            <p className="contacts__title">Телефон:</p>
            <a href="tel:84963446595" className="contacts__text contacts__text_mod_phone">8(496)344-65-95</a>
            <a href="tel:89154284888" className="contacts__text contacts__text_mod_phone">8(915)428-48-88</a>
          </div>
          <div className="contacts__item">
            <p className="contacts__title">Электронная почта:</p>
            <a className="contacts__text contacts__text_mod_email" href="mailto:vega-hotel.nara@mail.ru">vega-hotel.nara@mail.ru</a>
          </div>
        </div>
        <div className="contacts__item contacts__item_mod_address">
          <p className="contacts__title">Наш адрес:</p>
          <p className="contacts__text contacts__text_mod_address">143300, Московская область, г. Наро-Фоминск, ул. Московская, д. 6</p>
          <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab9c4e0380f5704caf89a5f17f55893777c0ccc5eabacd7a9226a0bc71fc6a33d&amp;source=constructor" frameBorder="0"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contacts;