import React, { Component } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';
import { Grid } from 'semantic-ui-react';
import ItemShow from './ItemShow';

class Items extends Component {
  componentDidMount() {
    const { getAllItems, menuId } = this.props
    getAllItems(menuId)
  }

  renderItems = () => {
    const { updateItem, deleteItem, menuId } = this.props
    return(
      this.props.items.map( i => {
        return(
          <ItemShow 
            updateItem={updateItem} 
            deleteItem={deleteItem} 
            menuId={menuId} 
            {...i}
          />
        )
      })
    )
  }

  render() {
    const { menuId, addItem } = this.props
    return(
      <>
        <ItemForm menuId={menuId} addItem={addItem} />
        <br />
        <br />
        <br />
        <Grid columns={3} stackable>
          { this.renderItems() }
        </Grid>
      </>
    )
  }
}

const ConnectedItems = (props) => (
  <ItemConsumer>
    {
      values => <Items {...props} {...values} />
    }
  </ItemConsumer>
)

export default ConnectedItems;