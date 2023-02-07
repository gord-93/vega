function Registration() {
  return (
    <section className="registration">
      <input className="registration__input" type="text" placeholder="От"/>
      <input className="registration__input" type="text" placeholder="До" />
      <input className="registration__input" type="text" placeholder="Гости"/>
      <button className="registration__button">забронировать</button>
    </section>
  )
}

export default Registration;