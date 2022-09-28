import '../styles/globals.css';
import { wrapper, store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Container from '../components/Container/Container';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Container>
    <Component {...pageProps} />
    </Container>
    </PersistGate>
    </Provider>
  )
}

export default MyApp
