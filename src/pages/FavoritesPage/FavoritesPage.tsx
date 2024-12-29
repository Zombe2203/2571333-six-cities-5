import { Link } from 'react-router-dom';
import OffersOnCities from '../../components/OffersOnCities/OffersOnCities';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ActionTypes } from '../../recources/ActionTypes';
import { LoadingStatus } from '../../recources/LoadingStatus';
import { AppRoute } from '../../recources/Routes';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector((state) => state[ActionTypes.FAVORITES].favorites);
  const isLoading = useAppSelector((state) => state[ActionTypes.FAVORITES].isFavoritesDataLoading);

  return (
    <div className={`page ${favorites.length === 0 ? 'page--favorites-empty' : null}`}>
      <PageHeader />

      <main className={`page__main page__main--favorites ${favorites.length === 0 ? 'page__main--favorites-empty' : null}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${favorites.length === 0 ? 'favorites--empty' : null}`}>
            {((isLoading === LoadingStatus.Failure || isLoading === LoadingStatus.Success) && favorites.length === 0)
              ?
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </>
              :
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <OffersOnCities />
              </>}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
