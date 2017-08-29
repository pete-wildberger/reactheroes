'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class HeroesMenu extends React.Component {
  render() {
    return (
          <div className="col-md-12 menu">
            {this.props.heroes.map(menuHero => {
                return <Link key={menuHero.id} to={`/hero/${menuHero.id}`} activeClassName="active">
                 <span className="inline"> {menuHero.name} </span>
                </Link>;
              })}
              </div>
    );
  }
}
