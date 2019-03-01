# Redux Assign Reducers
Combines reducers into a root reducer.

## Example
```
import { assignReducers } from 'redux-assign-reducers';

const rootReducer = (state, action) => {}
const reducers = {
    tomato: (state, action) => {},
    potato: (state, action) => {}
}

const reducer = assignReducers(rootReducer, reducers);

/**
 * The resulting reducer will generate the following state
 * {
 *    // the result of the rootReducer,
 *    tomato: {},
 *    potato: {}
 * }
 */
```
