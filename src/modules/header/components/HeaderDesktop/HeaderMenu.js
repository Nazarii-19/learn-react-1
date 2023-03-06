import HeaderList from './HeaderList'
import HeaderButtons from './HeaderButtons'

const HeaderMenu = () => {
  return (
    <div className="h-100 d-flex ai-center gap-20">
      <HeaderList/>
      <HeaderButtons/>
    </div>
  )
}

export default HeaderMenu
