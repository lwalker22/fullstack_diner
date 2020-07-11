import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import { Container } from 'semantic-ui-react';
import Navbar from './components/shared/Navbar';
import Diners from './components/diners/Diners';
import DinerShow from './components/diners/DinerShow';
import MenuShow from './components/menus/MenuShow';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/diners' component={Diners} />
        <Route exact path='/diners/:id' component={DinerShow} />
        <Route exact path='/menus/:id' component={MenuShow} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;