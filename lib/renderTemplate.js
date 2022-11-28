require('@babel/register');
const ReactDomServer = require('react-dom/server');
const React = require('react');

const renderTemplate = (reactElement, properties, response) => {
    const reactEl = React.createElement(reactElement, properties);
    const html = ReactDomServer.renderToStaticMarkup(reactEl);
    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end()
}

module.exports = renderTemplate