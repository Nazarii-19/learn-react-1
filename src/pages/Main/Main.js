import { memo } from 'react'
import Banner from './Banner/Banner'
import Table from './Table/Table'

const Main = () => {
  return (
    <>
      <Banner/>
      <Table/>
    </>
  )
}

export default memo(Main)
