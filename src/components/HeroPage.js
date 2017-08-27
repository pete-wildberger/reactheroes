'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import HeroesMenu from './HeroesMenu';
import heroes from '../data/heroes';

export default class HeroPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const hero = heroes.filter((hero) => hero.id === id)[0];
    if (!hero) {
      return <NotFoundPage/>;
    }
    return (
      <div>
        <HeroesMenu heroes={heroes}/>
        <div>
          <header/>
          <div >
            <img src={`/img/${hero.image}`}/>
            <h2>{hero.name}</h2>
          </div>
          <section>
          <p>{hero.description}</p>
            (Find out more on <a href={hero.link} target="_blank">Wikipedia</a>).
          </section>
        
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
