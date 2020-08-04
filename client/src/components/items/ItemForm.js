import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = { name: '', price: '' }

  componentDidMount() {
    if (this.props.id) {
      const { name, price } = this.props
      this.setState({ name, price })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateItem, menuId, id, handleClose } = this.props
      updateItem(menuId, id, this.state)
      handleClose()
    } else {
      const { addItem, menuId } = this.props
      addItem(menuId, this.state)
    }
    this.setState({ name: '', price: '' })
  }

  render() {
    const { name, price } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          required
          placeholder='Item name'
        />
        <Form.Input
          name='price'
          value={price}
          onChange={this.handleChange}
          required
          placeholder='Item Price'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ItemForm;