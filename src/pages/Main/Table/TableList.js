const TableList = ({ isMostPopular }) => {
  return (
    <div>
      {
        isMostPopular
          ? <div>
            Bitcoin
          </div>
          : <div>Enjin Coin</div>
      }
    </div>
  )
}

export default TableList
