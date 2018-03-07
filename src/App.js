import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import smartquotes from 'smartquotes'
import ScrollTop from './components/ScrollTop'
import Theme from './globals/Theme'
import './App.css'
import routingData from './data'
// insert route pages here
import Home from './routes/Home/Home'

export default class App extends React.Component {
  componentDidMount () {
    smartquotes()
  }
  render () {
    return (
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ScrollTop>
            <Route exact path={routingData.home.url} component={Home} />
          </ScrollTop>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
