import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginView from './screens/Auth/Login'
import RegisterView from './screens/Auth/RegisterView'
import Header from './components/header'


import Home from './screens/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/home' component={Home} exact></Route>
          <Route path='/login' component={LoginView} exact></Route>
          <Route path='/signup' component={RegisterView} exact></Route>
        </Container>
      </main>
 
    </BrowserRouter>
  )
}

export default App
