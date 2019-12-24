import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'

import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import App from '../src/App'
const app = new Koa()
const router = Router()

function getHtml(rNode) {
  return (
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
    </head>
    <body>
      <div id="root">
        ${rNode}
      </div>
    </body>
    <script src="/dist/bundle.js"></script>
  </html>`)
}

router.get('*', ctx => {
  const rNode = renderToString(
    <App />
  )
  const html = getHtml(rNode)
  console.log(html)
  ctx.body = html
  // ctx.body = 111
})

app.use(serve(path.resolve(__dirname, '../')))
app.use(router.routes(), router.allowedMethods())

app.listen('9000', () => {
  console.log('start server')
})