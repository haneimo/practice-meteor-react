import React from 'react';
import 'bootstrap'
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Lane } from './Lane.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <div className="container">
      <div className="row">
        <Lane/>
        <Lane/>
        <Lane/>
      </div>
    </div>
  </div>
);
