import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from 'app/store';
import 'contexts/styles/index.scss'; // css style reset

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;