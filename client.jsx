const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay');
const { hot } = require('react-hot-loader/root');

const Hot = hot(WordRelay);
ReactDom.render(<Hot />, document.getElementById('root'));
