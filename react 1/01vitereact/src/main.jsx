import React from 'react';
import ReactDOM from 'react-dom/client';

// Remove this line if index.css is deleted
// import './index.css';

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to go to Google'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);
