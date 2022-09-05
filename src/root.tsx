// Libraries
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

// Styles
import AsapFontStyle from '@fontsource/asap/index.css'
import remixImageStyles from 'remix-image/remix-image.css'
import normalize from './styles/normalize.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'aiherrera | Personal website',
  viewport: 'width=device-width,initial-scale=1'
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: AsapFontStyle },
  { rel: 'stylesheet', href: normalize },
  { rel: 'stylesheet', href: remixImageStyles }
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
