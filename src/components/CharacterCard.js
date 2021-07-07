import React from 'react';
import {Link} from 'react-router-dom';
import iconStatus from '../services/iconStatus';
import iconSpecies from '../services/iconSpecies';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.data.id}`}>
      <article>
        <img
          className="listCharacter__img"
          src={props.data.image}
          alt={`Foto de ${props.data.name}`}
          title={`Foto de ${props.data.name}`}
        />
        <div className="listCharacter__container">
          <h4 className="listCharacter__name">{props.data.name}</h4>
          <p className="listCharacter__species">{props.data.species}</p>
          <p className="listCharacter__species">{props.data.type}</p>
          <div className="listCharacter__icon">
            <span>{iconStatus(props.data.status)}</span>
            <span className="listCharacter__icon--species">
              {iconSpecies(props.data.species)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    photo: PropTypes.string,
    status: PropTypes.string,
  }),
};
