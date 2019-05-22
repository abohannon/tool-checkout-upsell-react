import * as React from 'react'
import * as ReactDOM from 'react-dom'
import UpsellContainer from './containers/Upsell'

const rootEl = document.getElementById(`root`)

const renderApp = (Component: Function) => ReactDOM.render(
  <Component description="Hello World" />,
  rootEl,
)

renderApp(UpsellContainer)