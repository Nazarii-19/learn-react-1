import styles from './Banner.module.scss'
import Button from '../../../ui/Button/Button'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const BannerContent = () => {
  return (
    <div className={ styles.content }>
      <div>
        <h1 className={ classNames(styles.content__title, 'page-title mb-30') }>Buy, sell and trade crypto today</h1>
        <p className={ styles.content__subtitle }>
          Trade with confidence and build your future with Australia’s fastest crypto exchange.
        </p>
        <div className="d-flex gap-20 mt-40">
          <Button>
            Get started
          </Button>

          <Link to="/">
            <Button buttonType="secondary">
              View exchange
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerContent
