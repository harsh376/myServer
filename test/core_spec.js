import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, filterEntries} from '../src/core';

describe('application logic', () => {
    describe('setEntries', () => {
        it('adds the entries to the state', () => {
            const state = Map();
            const entries = ['Ross', 'Rachel', 'Joey'];
            const nextState = setEntries(state, entries);

            expect(nextState).to.equal(Map({
                input: '',
                filtered_text: List.of('Ross', 'Rachel', 'Joey'),
                entries: List.of('Ross', 'Rachel', 'Joey')
            }));
        });
    });

    describe('filterEntries', () => {
        it('filters the entries based on the input text', () => {
            const state = Map({
                input: '',
                filtered_text: List.of('Ross', 'Rachel', 'Chandler'),
                entries: List.of('Ross', 'Rachel', 'Chandler')
            });
            const input = 'R';
            const nextState = filterEntries(state, input);

            expect(nextState).to.equal(Map({
                input: 'R',
                filtered_text: List.of('Ross', 'Rachel'),
                entries: List.of('Ross', 'Rachel', 'Chandler')
            }));
        });

        it('shows all entries when input is blank', () => {
            const state = Map({
                input: 'R',
                filtered_text: List.of('Ross', 'Rachel'),
                entries: List.of('Ross', 'Rachel', 'Chandler')
            });
            const input = '';
            const nextState = filterEntries(state, input);

            expect(nextState).to.equal(Map({
                input: '',
                filtered_text: List.of('Ross', 'Rachel', 'Chandler'),
                entries: List.of('Ross', 'Rachel', 'Chandler')
            }));
        });
    });
});
