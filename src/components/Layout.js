'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <Link  to="/">
            <img src="/img/heroes.jpeg"/>
          </Link>
          <h1 className="inline">Heroes</h1>
        </header>
        <div className="row">
          {this.props.children}
        </div>
        <footer>Hello</footer>

      </div>
    );
  }
}
