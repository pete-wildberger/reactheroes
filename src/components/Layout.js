'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-judo-heroes.png"/>
          </Link>
        </header>
        <div className="row">
        <div className="col-md-4">{this.props.children}</div>
        <footer>Hello</footer>
        </div>
      </div>
    );
  }
}
