'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class HeroPreview extends React.Component {
  render() {
    return (
      <Link to={`/hero/${this.props.id}`}>
        <div>
          <img src={`img/${this.props.image}`}/>
          <h2>{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
