import { PRODUCTS } from '../shared/products';
import { TERMS } from '../shared/terms';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    products: PRODUCTS,
    terms: TERMS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};