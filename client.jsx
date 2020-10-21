const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay');
const NumberBaseBall = require('./NumberBaseball');

const { hot } = require('react-hot-loader/root');

const Hot = hot(NumberBaseBall);
ReactDom.render(<Hot />, document.getElementById('root'));
