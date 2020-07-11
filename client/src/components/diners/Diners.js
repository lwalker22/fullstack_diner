import React from 'react';
import { DinerConsumer } from '../../providers/DinerProvider';
import DinerForm from './DinerForm';
import DinerList from './DinerList';

const Diners = () => (
  <DinerConsumer>
    {
      value => (
        <>
          <h1>Diners Page</h1>
          <DinerForm addDiner={value.addDiner} />
          <DinerList diners={value.diners} />
        </>
      )
    }
  </DinerConsumer>
) 

export default Diners;