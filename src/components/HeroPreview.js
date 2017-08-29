'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class HeroPreview extends React.Component {
  render() {
    return (
      <Link className="menuItem" to={`/hero/${this.props.id}`}>
        <div className="col-md-4">
          <img src={`img/${this.props.image}`}/>
          <h2>{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
