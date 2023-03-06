import { Link } from 'react-router-dom'
import { menuList } from '../../consts/menuList'
import styles from './HeaderDesktop.module.scss'

const HeaderList = () => {
  return (
    <ul className={ styles.header__list }>
      {
        menuList.map(menuItem =>
          <li key={ menuItem.link }>
            {
              <Link to={ menuItem.link }>
                { menuItem.title }
              </Link>
            }
          </li>,
        )
      }
    </ul>
  )
}

export default HeaderList
