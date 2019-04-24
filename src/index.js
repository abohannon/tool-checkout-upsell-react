import React from 'react'
import { render } from 'react-dom'
import UpsellContainer from './containers/UpsellContainer'

const rootEl = document.getElementById(`root`)

const renderApp = Component => render(
  <UpsellContainer />,
  rootEl,
)

renderApp(UpsellContainer)