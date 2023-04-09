function Registration() {
  return (
    <section className="registration">
      <h2 className="registration__title">Забронируйте номер сейчас:</h2>
      <div className="registration__inputs">
        <input className="registration__input" type="text" placeholder="От"/>
        <input className="registration__input" type="text" placeholder="До" />
        <input className="registration__input" type="text" placeholder="Гости"/>
      </div>
      <button className="registration__button" disabled>забронировать</button>
    </section>
  )
}

export default Registration;