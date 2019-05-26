import React from 'react'
import { render } from 'react-dom'
import UpsellContainer from './containers/UpsellContainer'
import { UpsellInterface } from './types'

declare global {
  interface Window {
    upsell: UpsellInterface;
  }
}

const rootEl = document.getElementById(`root`)

const initRef = (upsellComponent: object): void => {
  console.log(typeof upsellComponent)
  window.upsell = upsellComponent
}

const initConfig = (): object => {
  const config: string = rootEl.dataset.config
  if (config) return JSON.parse(config)
  return {}
}

const renderApp = (Component: Function): void => render(
  <Component
    ref={initRef}
    config={initConfig()}
  />,
  rootEl,
)

renderApp(UpsellContainer)
