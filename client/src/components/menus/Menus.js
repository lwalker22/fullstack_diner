import React, { Component } from 'react';
import { MenuConsumer } from '../../providers/MenuProvider';
import MenuForm from './MenuForm';
import { DinerConsumer } from '../../providers/DinerProvider';
import MenuList from './MenuList';

class Menus extends Component {
  componentDidMount() {
    const { getAllMenus, dinerId } = this.props
    getAllMenus(dinerId)
  }

  render() {
    const { addMenu, dinerId, menus, deleteMenu, history } = this.props
    return(
      <>
        <h1>Menus:</h1>
        <MenuForm addMenu={addMenu} dinerId={dinerId} />
        <MenuList 
          menus={menus} 
          deleteMenu={deleteMenu} 
          history={history}  
        />
      </>
    )
  }
}

const ConnectedMenus = (props) => (
  <MenuConsumer>
    {
      values => <Menus {...props} {...values} />
    }
  </MenuConsumer>
)

// const ConnectedConnectedMenus = (props) => (
//   <DinerConsumer>
//     {
//       values => <ConnectedMenus {...props} {...values} />
//     }
//   </DinerConsumer>
// )

export default ConnectedMenus;