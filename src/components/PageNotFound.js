import RickSad from '../images/rick-sad.png';
import {Link} from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="pageNot">
      <img
        className="pageNot__img"
        src={RickSad}
        alt="No se encuentra el personaje"
      />
      <div className="pageNot__container">
        <p className="pageNot__text2 ">Ni lo intentes...</p>
        <p className="pageNot__text">Te has ido totalmente de la ruta!</p>
        <Link to="/">
          <button className="pageNot__button">Volver</button>
        </Link>
      </div>
    </div>
  );
}
export default PageNotFound;
