import {List, fromJS} from 'immutable';

/*
 * Initializes the state
 */
export function setEntries(state, entries) {
    return state.set('input', '')
                .set('filtered_text', List(entries))
                .set('entries', List(entries));
}

/*
 * Returns the entries that begin with `input`
 */
function filter(entries, input) {
    let output = [];
    for (let entry of entries) {
        if(entry.toLowerCase().indexOf(input.toLowerCase()) === 0) {
            output.push(entry);
        }
    }
    return output;
}

/*
 * Returns the updated set
 */
export function filterEntries(state, input) {
    const filtered_text = filter(state.get('entries'), input);
    return state.set('input', input)
                .set('filtered_text', fromJS(filtered_text));
}
