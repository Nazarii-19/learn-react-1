import iphoneImg from '../../../assets/img/mainBanner/iPhone.png'
import styles from './Banner.module.scss'

const BannerImg = () => {
  return (
    <div className={ styles.img }>
      <img src={ iphoneImg } alt=""/>
    </div>
  )
}

export default BannerImg
