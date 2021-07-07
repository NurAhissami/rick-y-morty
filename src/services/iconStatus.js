const iconAlive = <i className="listCharacter__icon fas fa-heartbeat"></i>;
const iconDead = (
  <i className="listCharacter__icon fas fa-skull-crossbones"></i>
);
const iconUnknown = (
  <i className="listCharacter__icon fas fa-question-circle"></i>
);
const iconStatus = (status) => {
  if (status.toLowerCase() === 'alive') {
    return iconAlive;
  } else if (status.toLowerCase() === 'dead') {
    return iconDead;
  } else {
    return iconUnknown;
  }
};

export default iconStatus;
