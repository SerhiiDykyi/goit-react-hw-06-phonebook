import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Loader from 'react-loader-spinner';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate
        loading={
          <Loader
            type="Bars"
            color="#3f51b5"
            height={50}
            width={100}
            visible={true}
          />
        }
        persistor={store.persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
