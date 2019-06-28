import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('post');
const sub = urlParams.get('sub')
const url = urlParams.get('proxy')

if (postId) {
    ReactDOM.render(<App post={postId} url={url}/>, document.getElementById('root'));
} else if (sub) {
    ReactDOM.render(<App sub={sub} url={url}/>, document.getElementById("root"))
}
else {
    ReactDOM.render(<App url={url}/>, document.getElementById('root'));
}