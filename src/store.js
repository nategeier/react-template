import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'

export const history = createBrowserHistory()

export default createStore(connectRouter(history)(rootReducer), compose(applyMiddleware(routerMiddleware(history))))
