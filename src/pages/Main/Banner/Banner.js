import classNames from 'classnames'
import BannerContent from './BannerContent'
import BannerImg from './BannerImg'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <section className={ styles.banner }>
      <div className={ classNames(styles.banner__body, '_container') }>
        <BannerContent/>
        <BannerImg/>
      </div>
    </section>
  )
}

export default Banner
