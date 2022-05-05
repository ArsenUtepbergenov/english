function SimpleList({ items, prop = '' }) {
  return (
    <ol>
      {items?.length && prop ? items.map((item) => <li key={item[prop]}>{item[prop]}</li>) : null}
    </ol>
  )
}

export default SimpleList
