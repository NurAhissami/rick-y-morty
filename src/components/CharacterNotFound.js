import PropTypes from 'prop-types';
import mortySad from '../images/sad.png';

function CharacterNotFound(props) {
  return (
    <div className="characterNot">
      <img
        className="characterNot__img"
        src={mortySad}
        alt="No se encuentra el personaje"
      />
      <div className="characterNot__container">
        <p className="characterNot__text2 ">
          No hay ningun personsaje que coincida con {props.character}
        </p>
        <p className="characterNot__text">
          ¿Enserio? me da que no estás al día con la serie...
        </p>
      </div>
    </div>
  );
}
export default CharacterNotFound;

CharacterNotFound.propTypes = {
  character: PropTypes.array,
};
