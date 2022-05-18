import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import App from 'App'
import './firebase/firebase.js'

const rootNode = document.getElementById('root')
const root = ReactDOM.createRoot(rootNode as Element)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
