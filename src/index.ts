import { Reducer } from 'redux';

export const assignReducers = (
    root: Reducer,
    reducers: {
        [key: string]: Reducer;
    },
    initialState: any = undefined
): Reducer => {
    return (state = initialState, action) => {
        const rootResult = root({...state}, action);
        Object.keys(reducers).forEach(key => {
            rootResult[key] = reducers[key](state[key] || initialState[key], action);
        });
        return rootResult;
    }
}