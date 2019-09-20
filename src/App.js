import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


import './App.css';

const cities= [ 
  'Buenos Aires,ar',
  'Córdoba,ar',
  'Madrid,es',
  'Ciudad de México,mx'
];

class App extends Component {

  render(){
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
            <LocationListContainer cities={cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
                <Paper zDepth={4}>
                <div className='detail'>
                  <ForecastExtendedContainer></ForecastExtendedContainer>
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
