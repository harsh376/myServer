import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
    it('handles SET_ENTRIES', () => {
        const initialState = Map();
        const action = {type: 'SET_ENTRIES', entries: ['Ross', 'Rachel', 'Chandler']};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            input: '',
            filtered_text: ['Ross', 'Rachel', 'Chandler'],
            entries: ['Ross', 'Rachel', 'Chandler']
        }));
    });

    it('handles FILTER_ENTRIES', () => {
        const initialState = fromJS({
            input: '',
            filtered_text: ['Ross', 'Rachel', 'Chandler'],
            entries: ['Ross', 'Rachel', 'Chandler']
        });
        const action = {type: 'FILTER_ENTRIES', input: 'R'};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            input: 'R',
            filtered_text: ['Ross', 'Rachel'],
            entries: ['Ross', 'Rachel', 'Chandler']
        }));
    });

    it('can be used with reduce', () => {
        const actions = [
            {type: 'SET_ENTRIES', entries: ['Ross', 'Rachel', 'Chandler', 'Monica', 'Phoebe', 'Joey']},
            {type: 'FILTER_ENTRIES', input: 'R'},
            {type: 'FILTER_ENTRIES', input: 'ra'},
        ];
        const finalState = actions.reduce(reducer, Map());

        expect(finalState).to.equal(fromJS({
            input: 'ra',
            filtered_text: ['Rachel'],
            entries: ['Ross', 'Rachel', 'Chandler', 'Monica', 'Phoebe', 'Joey']
        }));
    });
});
