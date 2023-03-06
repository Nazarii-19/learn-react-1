import Button from '../../../../ui/Button/Button'
import { logIn, signUp } from '../../services/authServices'

const HeaderButtons = () => {
  const logInHandler = async () => {
    await logIn()
  }
  const signUpHandler = async () => {
    await signUp()
  }

  return (
    <div className="d-flex ai-center gap-10">
      <Button buttonType="secondary" onClick={ logInHandler }>
        Log in
      </Button>
      <Button onClick={ signUpHandler }>
        Sign up
      </Button>
    </div>
  )
}

export default HeaderButtons
