  
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useStore } from "@Redux";
import '@Public/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
