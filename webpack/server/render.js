import { renderToString } from 'react-dom/server'

export default component => `
      <!DOCTYPE html>
      <head>
        <title>Universal React</title>
        <link rel="stylesheet" href="/css/main.css">
      </head>
      <body>
        <div id="root">${renderToString(component)}</div>
        <script src="/js/commons.js"></script>
        <script src="/js/client.js"></script>
      </body>
    </html>
`
