import React from 'react';
import 'bootstrap'
import { Image } from 'bootstrap'
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Lane } from './Lane.jsx';

export const App = () => (
  <div>
    <h1>Characters Memo</h1>
    <div className="container">
      <div className='row'>
        <dev className='col'>
          <img className='img-fluid center-block' src='/images/unknown.jpg' style={{mergin: '50px', maxWidth: '80%' , height: 'auto'}} />
        </dev>
        <dev className='col'>
          <img className='img-fluid center-block' src='/images/unknown.jpg' style={{mergin: '50px', maxWidth: '80%' , height: 'auto'}}/>
        </dev>
      </div>
      <div className="row">
        <Lane title="Left character memo" />
        <Lane title="Memo about each other" />
        <Lane title="Right character memo" />
      </div>
    </div>
  </div>
);
