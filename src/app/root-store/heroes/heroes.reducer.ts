import { createReducer, on } from '@ngrx/store';
import {
  loadHeroes,
  add,
  deleteHero,
  isHeroNameInvalid,
} from './heroes.actions';
import { Hero } from '../../models/hero';

export interface State {
  heroes: Hero[];
  selectedHero?: Hero;
  heroName: string;
}

export const initialState: State = {
  heroes: [],
  selectedHero: undefined,
  heroName: '',
};

export const heroesReducer = createReducer(
  initialState,
  on(loadHeroes, (state) => ({ ...state, heroes: [{ id: 65, name: 'lulu' }] })),
  on(add, (state, { hero }) => ({ ...state, heroes: [...state.heroes, hero] })),
  on(deleteHero, (state, { id }) => ({
    ...state,
    heroes: state.heroes.filter((h) => h.id !== id),
  })),
  on(isHeroNameInvalid, (state, { heroName }) => ({ ...state, heroName }))
);
