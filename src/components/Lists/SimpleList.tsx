import { FC, memo } from 'react'
import { SimpleListProps } from './lists.types'

const SimpleList: FC<SimpleListProps> = ({ items, prop = '' }) => {
  return (
    <ol>
      {items?.length && prop ? items.map(item => <li key={item[prop]}>{item[prop]}</li>) : null}
    </ol>
  )
}

export default memo(SimpleList)
