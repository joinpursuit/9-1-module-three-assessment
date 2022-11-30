import React, { useState, useEffect } from 'react';

export default function Location({ data, setData, show, setShow }) {
  // const []
  useEffect(() => {
    fetch('/locations.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function sortByName() {
    const nameSort = data.map((e) => e.name.toLowerCase());
    nameSort.sort();
    return (
      <ul>
        <li>
          <ul>{nameSort}</ul>
        </li>
      </ul>
    );
    // console.log(nameSort);
    // console.log(data);
  }
  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      <button onClick={sortByName}>Sort By Name</button>
      <ul>
        {show &&
          data &&
          data.map((locale) => (
            <li key={locale.id}>
              <ul>
                <li>{locale.name}</li>
                <li>{locale.climate}</li>
                <li>{locale.terrain}</li>
                {sortByName}
              </ul>
            </li>
          ))}
      </ul>
      <ul></ul>
    </div>
  );
}
