import { Header } from './modules/header'
import Main from './pages/Main/Main'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={ <Main/> }/>
      </Routes>
    </>
  )
}

export default App
