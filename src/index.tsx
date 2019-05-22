import * as React from 'react'
import * as ReactDOM from 'react-dom'
import UpsellContainer from './containers/Upsell'

const rootEl = document.getElementById(`root`)

const initRef = (upsellComponent: object): void => {
  (window as any).upsell = upsellComponent
}

const initConfig = (): object => {
  const config: string = rootEl.dataset.config
  if (config) return JSON.parse(config)
  return {}
}

const renderApp = (Component: Function) => ReactDOM.render(
  <Component
    ref={initRef}
    config={initConfig()}
  />,
  rootEl,
)

renderApp(UpsellContainer)