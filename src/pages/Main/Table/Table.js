import { useState } from 'react'
import TableTabs from './TableTabs'
import TableList from './TableList'
import styles from './Table.module.scss'

const Table = () => {
  const [isMostPopular, setIsMostPopular] = useState(true)

  return (
    <section className={ styles.table }>
      <div className="_container">
        <TableTabs
          isMostPopular={ isMostPopular }
          setIsMostPopular={ setIsMostPopular }
        />

        <TableList
          isMostPopular={ isMostPopular }
        />
      </div>
    </section>
  )
}

export default Table
