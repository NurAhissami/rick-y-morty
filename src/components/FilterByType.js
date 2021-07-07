import React from 'react';

const FilterByType = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'type',
    });
  };
  return (
    <>
      <label htmlFor="name"></label>
      <input
        className="form__inputText"
        type="text"
        name="type"
        id="type"
        value={props.filterType}
        onChange={handleChange}
        placeholder="Busca el tipo de personaje"
      />
    </>
  );
};

export default FilterByType;
