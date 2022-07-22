import { createAction, props } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const loadHeroes = createAction('[Heroes] Get Heroes');
export const add = createAction('[Heroes] Add', props<{ hero: Hero }>());
export const deleteHero = createAction(
  '[Heroes] Delete Hero',
  props<{ id: number }>()
);
export const isHeroNameInvalid = createAction(
  '[Heroes] Is Hero Name Invalid',
  props<{ heroName: string }>()
);
