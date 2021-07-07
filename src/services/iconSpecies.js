const iconHuman = <i className="listCharacter__icon fas fa-user"></i>;
const iconAlien = <i className="listCharacter__icon fab fa-reddit-alien"></i>;

const iconSpecies = (species) => {
  return species.toLowerCase() === 'human' ? iconHuman : iconAlien;
};

export default iconSpecies;
