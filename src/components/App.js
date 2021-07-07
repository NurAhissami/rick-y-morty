import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';

import api from '../services/api';
import ls from '../services/local-storage';

import ListCharacter from './ListCharacter';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import Header from './Header';
import PageNotFound from './PageNotFound';
import IdnotFound from './IdnotFound';

import '../stylesheets/App.scss';

function App() {
  const [character, setCharacter] = useState(ls.get('character', []));
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get('filterSpecies', '')
  );
  const [filterType, setFilterType] = useState(ls.get('filterType', ''));

  // const [favorites, setFavorites] = useState(ls.get('favorites', ''));

  useEffect(() => {
    api().then((data) => {
      const ordered = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacter(ordered);
    });
  }, []);

  useEffect(() => {
    ls.set('character', character);
  }, [character]);

  useEffect(() => {
    ls.set('character', character);
    ls.set('filterName', filterName);
    ls.set('filterSpecies', filterSpecies);
    ls.set('filterType', filterType);
  }, [character, filterName, filterSpecies]);

  //Ruta dinámica
  const renderCharacterDetail = (routerProps) => {
    const routerChaId = routerProps.match.params.ChaId;

    const characterFound = character.find(
      (element) => element.id === parseInt(routerChaId)
    );

    if (characterFound) {
      return <CharacterDetail user={characterFound} />;
    } else {
      return <IdnotFound />;
    }
  };

  //Botón reset
  const handleReset = () => {
    setFilterName('');
    setFilterSpecies('');
    setFilterType('');
  };

  //Filtro
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'species') {
      setFilterSpecies(data.value);
    } else if (data.key === 'type') {
      setFilterType(data.value);
    }
  };
  const filteredCharacter = character
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((user) => {
      if (filterSpecies === '') {
        return true;
      } else {
        return user.species === filterSpecies;
      }
    })
    .filter((user) => {
      return user.type.toLowerCase().includes(filterType.toLowerCase());
    });

  //Favoritos
  // const favoritesCard = (clicked) => {
  //   const cardFavorite = favorites.find((element) => {
  //     return element.id === clicked;
  //   });

  //   if (cardFavorite === undefined) {
  //     const characterFav = character.find((element) => {
  //       return element.id === clicked;
  //     });
  //     setFavorites([...favorites, characterFav]);
  //     return;
  //   }
  //   const newFavoriters = favorites.filter((element) => element.id !== clicked);
  //   setFavorites(newFavoriters);
  // };
  return (
    <>
      <Header />
      {
        <Switch>
          <Route exact path="/">
            <Filters
              filterName={filterName}
              filterType={filterType}
              filterSpecies={filterSpecies}
              handleFilter={handleFilter}
              handleReset={handleReset}
            />
            <ListCharacter
              character={filteredCharacter}
              OnClick={handleReset}
              filterName={filterName}
              // favorites={favorites}
              // favoritesCard={favoritesCard}
            />
          </Route>

          <Route path="/character/:ChaId" render={renderCharacterDetail} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      }
    </>
  );
}

export default App;
