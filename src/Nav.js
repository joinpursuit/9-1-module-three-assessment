import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/location">Location</Link>
    </nav>
  );
}
