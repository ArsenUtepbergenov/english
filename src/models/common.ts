export const KeyCode = {
  ENTER: 'Enter',
}

export type Ref =
  | React.MutableRefObject<Element>
  | ((element: Element) => React.MutableRefObject<Element>)
