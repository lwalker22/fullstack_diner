import React, { Component } from 'react';
import axios from 'axios';

const MenuContext = React.createContext();

export const MenuConsumer = MenuContext.Consumer;

class MenuProvider extends Component {
  state = { menus: [] }

  getAllMenus = (diner_id) => {
    axios.get(`/api/diners/${diner_id}/menus`)
      .then( res => {
        this.setState({ menus: res.data })
      })
      .catch( err => console.log(err) )
  }

  addMenu = (diner_id, menu) => {
    axios.post(`/api/diners/${diner_id}/menus`, { menu } )
      .then( res => {
        const { menus } = this.state
        this.setState({ menus: [ ...menus, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateMenu = (diner_id, id, menu, history) => {
    axios.put(`/api/diners/${diner_id}/menus/${id}`, { menu } )
    .then( res => {
      const menus = this.state.menus.map( m => {
        if (m.id === id) {
          return res.data
        }
        return m
      })
      this.setState({ menus: menus })
      history.push('/diners')
    })
    .catch( err => console.log(err) )
  }

  deleteMenu = (diner_id, id, history) => {
    axios.delete(`/api/diners/${diner_id}/menus/${id}`)
      .then( res => {
        const { menus } = this.state
        this.setState({ menus: menus.filter( m => m.id !== id )})
        history.push('/diners')
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <MenuContext.Provider value={{
        ...this.state,
        getAllMenus: this.getAllMenus,
        addMenu: this.addMenu,
        updateMenu: this.updateMenu,
        deleteMenu: this.deleteMenu,
      }}>
        { this.props.children }
      </MenuContext.Provider>
    )
  }
}

export default MenuProvider;