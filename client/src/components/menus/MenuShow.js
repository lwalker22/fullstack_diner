import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { MenuConsumer } from '../../providers/MenuProvider';
import MenuForm from './MenuForm';
import Items from '../items/Items';

class MenuShow extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    const { title, diner_id, id } = this.props.location.state
    const { updateMenu, history } = this.props
    const { editing } = this.state
    return(
      <>
        <h1>{title}</h1>
        { editing ?
            <MenuForm 
              dinerId={diner_id} 
              title={title} 
              id={id}
              updateMenu={updateMenu} 
              history={history}
            />
          :
            <Button onClick={this.toggleEdit}>
              Edit
            </Button>
        }
        <br />
        <br />
        <Items menuId={id} />
      </>
    )
  }
}

const ConnectedMenuShow = (props) => (
  <MenuConsumer>
    { 
      values => <MenuShow {...props} {...values} />
    }
  </MenuConsumer>
)

export default ConnectedMenuShow;