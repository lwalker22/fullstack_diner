import React, { Component } from 'react';
import { Card, Grid, Button, Modal } from 'semantic-ui-react';
import ItemForm from './ItemForm';

class ItemShow extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { modalOpen } = this.state
    const { name, price, menuId, deleteItem, updateItem, id } = this.props
    return(
      <Grid.Column>
        <Card>
          <Card.Header>{name}</Card.Header>
          <Card.Content>
            {price}
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Modal 
                trigger={
                  <Button basic color='yellow' onClick={this.handleOpen}>
                    Edit
                  </Button>
                }
                open={modalOpen}
                onClose={this.handleClose}
              >
                <Modal.Header>Edit Item</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <ItemForm 
                      updateItem={updateItem} 
                      menuId={menuId} 
                      name={name}
                      price={price}
                      id={id} 
                      handleClose={this.handleClose} 
                    />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Button basic color='red' onClick={() => deleteItem(menuId, id)}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default ItemShow;