import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { favoriteOffers } from './mocks/favoriteOffers';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffers, userCheckAuth } from './store/actionsAPI';

store.dispatch(fetchOffers());
store.dispatch(userCheckAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        listOfFavoriteOffers={favoriteOffers}
      />
    </Provider>
  </React.StrictMode>
);
