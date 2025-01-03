import { render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { withHistory, withStore } from '../../recources/mock-component';
import { makeFakeStore } from '../../recources/mock';
import { CityList } from './city-list';
import { CITIES } from '../../recources/cities';

describe('City List tests', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render list', () => {
    const withHistoryComponent = withHistory(<CityList/>, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const { container } = render(withStoreComponent);

    const listContainer = container.querySelector('.locations__list');
    expect(listContainer).toBeInTheDocument();
  });


  it('should have current city highlighted ', () => {
    const testCity = CITIES.Brussels;
    const withHistoryComponent = withHistory(<CityList/>, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore(
      {
        City: {
          city: testCity
        }
      }
    ));
    const { container } = render(withStoreComponent);

    const listContainer = container.querySelector('.locations__list');
    expect(listContainer).toBeInTheDocument();

    const selectedCityContainer = listContainer?.querySelector('.tabs__item--active');
    expect(selectedCityContainer).toBeInTheDocument();

    const selectedCityNameContainer = selectedCityContainer?.querySelector('span');
    expect(selectedCityNameContainer).toHaveTextContent(testCity.name);
  });
});
