import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';
import PropTypes from 'prop-types';

function ListCharacter(props) {
  if (props.character.length === 0) {
    return <CharacterNotFound character={props.filterName} />;
  }

  const characterElements = props.character.map((element, id) => {
    return (
      <li className="listCharacter__list" key={id}>
        <CharacterCard data={element} />
      </li>
    );
  });

  return (
    <>
      <ul className="listCharacter">{characterElements}</ul>
    </>
  );
}
export default ListCharacter;

ListCharacter.propsTypes = {
  character: PropTypes.array,
};
