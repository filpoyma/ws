const React = require('react');

function Layout(props) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>WS</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
            integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
            crossOrigin="anonymous"/>
      <link rel="stylesheet" href="/style.css"/>
      <script defer src="/client.js"/>
    </head>
    <body>
    <div>
      {props.children}
    </div>
    </body>
    </html>
  )
}

module.exports = Layout;
