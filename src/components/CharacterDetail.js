import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import iconStatus from '../services/iconStatus';
import iconSpecies from '../services/iconSpecies';

const CharacterDetail = (props) => {
  return (
    <div className="detail">
      <Link to="/">
        <button className="detail__button">Volver</button>
      </Link>
      <section className="detail__section">
        <img
          className="detail__img"
          src={props.user.image}
          alt={props.user.name}
        />
        <div className="detail__list">
          <h4 className="detail__name">{props.user.name}</h4>
          <ul className="detail__ul">
            <li className="detail__list--li">
              <span>{iconStatus(props.user.status)}</span>
              <span>Status: {props.user.status}</span>
            </li>
            <li className="detail__list--li">
              <span>{iconSpecies(props.user.species)}</span>
              <span>Species: {props.user.species}</span>
            </li>
            <li className="detail__list--li">
              <span>
                <i class="listCharacter__icon fas fa-globe-europe"></i>
              </span>
              Origin: {props.user.origin}
            </li>
            <li className="detail__list--li">
              <span>
                <i class="listCharacter__icon fas fa-tv"></i>
              </span>
              Episode: {props.user.episode}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.number,
    species: PropTypes.string,
    photo: PropTypes.string,
  }),
};
