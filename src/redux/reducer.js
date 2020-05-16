import { ASPECTS } from '../shared/aspects';
import { SPONSORS } from '../shared/sponsors';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    aspects: ASPECTS,
    sponsors: SPONSORS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};