import { Reducer } from 'redux';

export const assignReducers = (
    root: Reducer,
    reducers: {
        [key: string]: Reducer;
    },
    initialState: any = undefined
): Reducer => {
    return (state = initialState, action) => {
        const rootResult = root(state, action);
        Object.keys(reducers).forEach(key => {
            if (rootResult[key]) {
                console.warn(`Duplicate reducer key: ${key}`);
            }
            rootResult[key] = reducers[key](state, action);
        });
        return rootResult;
    }
}