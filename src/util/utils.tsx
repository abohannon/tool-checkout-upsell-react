import { UpsellInterface } from '../types'

declare global {
  interface Window {
    upsell: UpsellInterface;
  }
}

export const addEventListeners = (targets: string[]): void => {
  const elements: NodeListOf<Element> = document.querySelectorAll(targets.join(`, `))

  /* Array.prototype.forEach is used for cross-browser compatibility. At the moment, IE and Edge don't allow forEach on a NodeList. */
  Array.prototype.forEach.call(elements, (element: HTMLElement): void => {
    element.addEventListener(`click`, (): void => {
      window.upsell.handleExternalEvent(element.id)
    })
  })
}
