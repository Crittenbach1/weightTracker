import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = ( ) =>
      <div>
        <NavLink to="/" exact>Home</NavLink>

        <NavLink to="/bbcNews">BBC</NavLink>

        <NavLink to="/foxNews">Fox</NavLink>

        <NavLink to="/savedArticles">Saved Articles</NavLink>

      </div>


export default NavBar;
