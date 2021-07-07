import rickYmorty from '../images/rick-morty.png';
import {Link} from 'react-router-dom';

function IdnotFound() {
  return (
    <div className="idnot">
      <img
        className="idnot__img"
        src={rickYmorty}
        alt="No se encuentra el personaje"
      />
      <div className="idnot__container">
        <p className="idnot__text2 ">Ouuuuchhh!!</p>
        <p className="idnot__text">Esta ruta no existe</p>
        <Link to="/">
          <button className="idnot__button">Volver</button>
        </Link>
      </div>
    </div>
  );
}
export default IdnotFound;
