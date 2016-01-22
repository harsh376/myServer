import {List, Map} from 'immutable';

import {setEntries, filterEntries} from './core';

export default function reducer(state = Map(), action) {
    switch(action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'FILTER_ENTRIES':
            return filterEntries(state, action.input);
        default:
            return state;
    }
}
