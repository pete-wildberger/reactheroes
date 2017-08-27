'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class HeroesMenu extends React.Component {
  render() {
    return (
      <nav>
        {this.props.heroes.map(menuHero => {
          return <Link key={menuHero.id} to={`/hero/${menuHero.id}`} activeClassName="active">
            {menuHero.name}
          </Link>;
        })}
      </nav>
    );
  }
}