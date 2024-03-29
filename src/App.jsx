import { store } from './context/store'
import { Provider } from 'react-redux'
import MakeOrder from './pages/MakeOrder'
import CreateOrder from './pages/CreateOrder'
import CreateBatch from './pages/CreateBatch'
import CreateProduct from './pages/CreateProduct'

function App() {

  return (
    <>
     <Provider store={store}>
      <CreateProduct/>
     </Provider>
    </>
  )
}

export default App
