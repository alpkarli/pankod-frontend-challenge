  
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useStore } from "@Redux";
import '@Public/styles/globals.scss'
import { Layout } from '@Components/Layout';

function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
