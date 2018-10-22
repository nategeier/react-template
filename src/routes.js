import Home from './components/Home'
import Builder from './components/Builder'

export default [
  {
    path: '/',
    text: 'Home',
    Component: Home,
    isNav: true
  },
  {
    path: '/builder',
    text: 'Builder',
    Component: Builder,
    isNav: false
  }
]
