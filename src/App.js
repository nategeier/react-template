import React, { PureComponent } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import styled from 'styled-components'
import store, { history } from './store'
import routes from './routes'
import TopNav from './components/TopNav'

var configs = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  secretKey: 'VOZ8iWvnxWTtn0dlYTRNdwyTUnhrFNuq4CBF0l2U'
}

firebase.initializeApp(configs)

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hey: 'ho'
    }
  }

  render() {
    const { hey } = this.state
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Page>
            <p>{hey}</p>
            <TopNav />
            <Switch>
              {routes.map(({ path, text, Component }) => (
                <Route key={path} exact path={path} render={() => <Component firebase={firebase} />} />
              ))}
            </Switch>
          </Page>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
