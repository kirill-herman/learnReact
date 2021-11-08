import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const elem = <h2 className='test'>Hello World!</h2>;

//same
// const elem = React.createElement('h2', null || {className: 'test'}, 'Hello World!');

// const element = {
//   type: 'h2',
//   props: {
//     className: 'test',
//     children: 'Hello World!'
//   }
// };

ReactDOM.render(
  elem,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
