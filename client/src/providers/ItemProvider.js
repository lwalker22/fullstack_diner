import React, { Component } from 'react';
import axios from 'axios';
const ItemContext = React.createContext();
export const ItemConsumer = ItemContext.Consumer;

class ItemProvider extends Component {
  state = { items: [] }
  getAllItems = (item_id) => {
    axios.get(`/api/menus/${menu_id}/items`)
      .then( res => {
        this.setState({ items: res.data })
      })
      .catch( err => console.log(err) )
  }

  addItem = (item_id, item) => {
    axios.post(`/api/menus/${menu_id}/items`, { item } )
      .then( res => {
        const { items } = this.state
        this.setState({ items: [ ...items, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateItem = (item_id, id, item) => {
    axios.put(`/api/menus/${menu_id}/items/${id}`, { item } )
    .then( res => {
      const items = this.state.items.map( m => {
        if (m.id === id) {
          return res.data
        }
        return m
      })
      this.setState({ items: items })
    })
    .catch( err => console.log(err) )
  }

  deleteItem = (item_id, id) => {
    axios.delete(`/api/menus/${menu_id}/items/${id}`)
      .then( res => {
        const { items } = this.state
        this.setState({ items: items.filter( i => i.id !== id )})
      })
      .catch( err => console.log(err) )
    }

    render() {
      return(
        <ItemContext.Provider value={{
          getAllItems: this.getAllItems,
          addItem: this.addItem,
          updateItem: this.updateItem,
          deleteItem: this.deleteItem,
        }}>
          { this.props.children }
        </ItemContext.Provider>
      )
    }
  }
  
  export default ItemProvider;