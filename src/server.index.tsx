import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import express from 'express'
import { App } from "./App"

function runServer() {
    const app = express()

    app.get('/', (req: express.Request, res: express.Response) => {
        const appHtmlString = ReactDOMServer.renderToString(<App />)

        const renderStream = ReactDOMServer.renderToStaticNodeStream(<html><body dangerouslySetInnerHTML={{__html:appHtmlString}}></body></html>)

        renderStream.pipe(res)
    })

    app.listen(3000, () => console.log('Example app listening on port 3000!'))
}

export { runServer }