import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {createStore} from 'redux';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities= [
  'Buenos Aires,ar',
  'Córdoba,ar',
  'Madrid,es',
  'Ciudad de México,mx'
];

const store = createStore(() => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation = city => {
    this.setState({city});

    const action = {type: 'setCity', value: city};
    store.dispatch(action);
  }

  render(){
    const {city} = this.state;
    return (

      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
                <Paper zDepth={4}>
                <div className='detail'>
                  {
                    city &&
                      <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
                </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
