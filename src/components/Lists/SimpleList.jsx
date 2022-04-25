function SimpleList({ items, prop = '' }) {
  return (
    <ul>
      {
        items?.length && prop ?
          items.map(item => <li key={item[prop]}>{item[prop]}</li>) :
          null
      }
    </ul>
  )
}

export default SimpleList