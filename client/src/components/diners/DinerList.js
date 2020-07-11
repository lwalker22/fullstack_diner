import React from 'react';
import { Link } from 'react-router-dom';

const DinerList = ({ diners }) => (
  <>
    <h1>Diners:</h1>
    {
      diners.map( d => 
        <>
          <Link to={{
            pathname: `/diners/${d.id}`,
            state: {...d}
          }}>
            { d.name }
          </Link>
          <br />
        </>
      )
    }
  </>
)

export default DinerList;