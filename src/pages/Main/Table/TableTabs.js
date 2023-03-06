import Button from '../../../ui/Button/Button'
import styles from './Table.module.scss'
import classNames from 'classnames'
import { useCallback } from 'react'

const TableTabs = ({
  isMostPopular,
  setIsMostPopular,
}) => {
  const tabList = [
    {
      className: classNames(styles.tabs, { [styles.tabs__active]: isMostPopular }),
      title: 'Most Popular',
      onClick: useCallback(() => setIsMostPopular(() => true), []),
    },
    {
      className: classNames(styles.tabs, { [styles.tabs__active]: !isMostPopular }),
      title: 'Top Movers',
      onClick: useCallback(() => setIsMostPopular(() => false), []),
    },
  ]

  return (
    <div className="d-flex jc-center gap-20">
      {
        tabList.map((tab, index) =>
          <Button key={ index } buttonType="empty" onClick={ tab.onClick }>
            <p className={ tab.className }>{ tab.title }</p>
          </Button>,
        )
      }
    </div>
  )
}

export default TableTabs
