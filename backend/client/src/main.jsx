import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import 'flexifycss'
import { Provider } from 'react-redux'
import store from './store'
import './styles/file_selector_btn.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <App /> */}
    {/* <div>Hello</div> */}

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>,
)