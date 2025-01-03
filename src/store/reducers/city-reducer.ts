import {createReducer} from '@reduxjs/toolkit';
import { City } from '../../components/map/map';
import { CITIES } from '../../recources/cities';
import { changeCity } from '../actions';


export type CityState = {
  city: City;
};

const initialState: CityState = {
  city: CITIES.Paris,
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {cityReducer};
