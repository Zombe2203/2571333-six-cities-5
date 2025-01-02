import { render, screen } from '@testing-library/react';
import { useRef } from 'react';

import useMap from './useMap.tsx';
import { City } from '../components/Map/Map.tsx';
import { CITIES } from '../recources/Cities.ts';

const TestComponent = (city: City) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div>
      <div ref={mapRef} />
      {map ? null : <p>Карта не инициализирована</p>}
    </div>
  );
};

export default TestComponent;

describe('useMap', () => {

  it('should render map correctly', () => {
    const notExpectedText = 'Карта не инициализирована';

    render(<TestComponent {...CITIES.Paris} />);

    const textElement = screen.queryByText(notExpectedText);
    expect(textElement).not.toBeInTheDocument();
  });
});
