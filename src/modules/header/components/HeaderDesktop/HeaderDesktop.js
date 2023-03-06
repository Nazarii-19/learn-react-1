import { memo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import classNames from 'classnames'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import styles from './HeaderDesktop.module.scss'

const HeaderDesktop = () => {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 100], [80, 50])
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <motion.header
      className={ styles.header }
      style={ { height } }
    >
      <div className={ classNames(styles.header__body, '_container') }>
        <HeaderLogo/>
        <HeaderMenu test={121} buttonType={() => {console.log('fn')}}/>
      </div>
      <motion.div style={ { opacity } } className={ styles.header__background }/>
    </motion.header>
  )
}

export default memo(HeaderDesktop)
