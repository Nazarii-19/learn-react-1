import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, buttonType, onClick }) => {
  const buttonClassNames = classNames(styles.button, styles[`button__${ buttonType ?? 'primary' }`])

  return (
    <button type="button" className={ buttonClassNames } onClick={ onClick }>
      { children }
    </button>
  )
}

export default Button
