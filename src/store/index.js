import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import appReduser from './appReduser'

const store = createStore(appReduser, composeWithDevTools(applyMiddleware(thunk)));

export default store;