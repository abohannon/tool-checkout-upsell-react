export const addEventListeners = (targets: string[]) => {
  const elements: NodeListOf<Element> = document.querySelectorAll(targets.join(', '))

  /* Array.prototype.forEach is used for cross-browser compatibility. At the moment, IE and Edge don't allow forEach on a NodeList. */
  Array.prototype.forEach.call(elements, function (element: HTMLElement | null) {
    element.addEventListener(`click`, (): void => {
      (window as any).upsell.handleExternalEvent(element.id)
    })
  })
}