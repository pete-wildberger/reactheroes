'use strict';

import React from 'react';
import HeroPreview from './HeroPreview';
import heroes from '../data/heroes';

export default class IndexPage extends React.Component {
  render() {
    return (
        <div className="indexpage">
          {heroes.map(heroData => <HeroPreview key={heroData.id} {...heroData} />)}
        </div>
    );
  }
}
