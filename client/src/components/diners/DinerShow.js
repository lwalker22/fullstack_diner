import React, { Component } from 'react';
import { DinerConsumer } from '../../providers/DinerProvider';
import { Button } from 'semantic-ui-react';
import DinerForm from './DinerForm';
import Menus from '../menus/Menus';

class DinerShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { name, id, address, hours } = this.props.location.state
    const { editing } = this.state
    const { updateDiner, deleteDiner, history } = this.props
    return(
      <>
        <h1>{name}</h1>
        <h3>{address}</h3>
        <h4>{hours}</h4>
        { editing ?
            <DinerForm 
              id={id}
              name={name}
              address={address}
              hours={hours}
              updateDiner={updateDiner}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteDiner(id, history)}>
          Delete
        </Button>
        <Menus dinerId={id} history={history} />
      </>
    )
  }
}

const ConnectedDinerShow = (props) => (
  <DinerConsumer>
    { value => (
      <DinerShow 
        {...props} 
        updateDiner={value.updateDiner} 
        deleteDiner={value.deleteDiner}
      />
    )}
  </DinerConsumer>
)

export default ConnectedDinerShow;