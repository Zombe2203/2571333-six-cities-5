import { useMemo, useState } from 'react';
import OfferList from '../../components/OfferList/OfferList';
import Map from '../../components/Map/Map';
import { CardProps } from '../../recources/Types';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CityList } from '../../components/CityList/CityList';
import PlacesSorter from '../../components/PlacesSorter/PlacesSorter';
import { SortOptions } from '../../recources/SortOptions';

function MainPage(): JSX.Element {
  const [activeCard, setActiveCard] = useState<CardProps | undefined>(undefined);
  const [currentSorting, setCurrentSorting] = useState<SortOptions>(SortOptions.POPULAR);

  const currrentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.stateOffers);

  function onOfferHover(hoveredCard: CardProps | undefined): void {
    setActiveCard(hoveredCard);
  }

  const onSortingChange = (sorting: SortOptions) => {
    setCurrentSorting(sorting);
  };

  const sortedOffers = useMemo(() => {
    switch (currentSorting) {
      case SortOptions.TOP_RATED:
        return currentOffers.toSorted((a, b) => b.rating - a.rating);
      case SortOptions.HIGH_TO_LOW:
        return currentOffers.toSorted((a, b) => b.price - a.price);
      case SortOptions.LOW_TO_HIGH:
        return currentOffers.toSorted((a, b) => a.price - b.price);
      default:
        return currentOffers;
    }
  }, [currentOffers, currentSorting]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currrentCity.name}</b>
              <PlacesSorter currentSorting={currentSorting} onSortingChange={onSortingChange}/>
              <OfferList listOfOffers={sortedOffers} onOfferHover={onOfferHover} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currrentCity} points={currentOffers} selectedPoint={activeCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
