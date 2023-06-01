import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__description">К сожалению, страница не найдена.</p>
      <NavLink to="/" className="not-found__link">На главную</NavLink>
    </section>
  )
}

export default NotFound;